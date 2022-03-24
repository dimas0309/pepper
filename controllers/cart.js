const express = require('express');
const app = express();
const Sesapp = require('../models/sesapp');
const Order = require('../models/order');
const Purchase = require('../models/purchase');
const Customer = require('../models/customer');

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
})

module.exports.showCart = async(req, res) => {
    const {id} = req.params;
    const cart = await Sesapp.findById(id)
                             .populate('orders')
     
    res.render('peppers/cart', {cart});
}

module.exports.addCart = async(req, res) => {
    const {id} = req.params;
    const cart = await Sesapp.findById(id);
    const {food, price, quantity, amount} = req.body;
    const order = new Order({food, price, quantity, amount});
    cart.orders.push(order);
    order.sessionApp = cart;
    await cart.save();
    await order.save();

    res.redirect(`/foods/cart/${id}`);
}

module.exports.cartList = async(req, res) => {
    const carts = await Sesapp.find({});

    res.render('peppers/carts_index', {carts})
}

module.exports.purchaseOrder = async(req, res) => {
    const {id} = req.params;
    const cart = await Sesapp.findById(id);
    const {total} = req.body;
    const purchase = new Purchase({total});
    purchase.sessionApp = cart
    await cart.save();
    await purchase.save();
    //const orders = cart.orders;

    // for (let idOR of orders){
    //     await Sesapp.findOneAndDelete({orders:idOR});
    // }

    res.redirect('/foods/purchase');
}

module.exports.purchaseInfo = async(req,res) => {
    const purchase = await Purchase.find({});

    const total = purchase[purchase.length - 1].total;
    const id = purchase[purchase.length - 1].id;

    res.render('peppers/purchase', {total,id});
}

module.exports.purchaseDeliver =  async(req, res) => {
    const {id} = req.params;
    const deliver = await Purchase.findById(id);
    const {customer,phonenumber,address} = req.body;
    const cuspurchase = new Customer({customer, phonenumber,address});
    cuspurchase.purchase = deliver;

    await cuspurchase.save();

    const sesid = deliver.sessionApp

    await Sesapp.findByIdAndDelete(sesid)

    res.redirect('/');
}