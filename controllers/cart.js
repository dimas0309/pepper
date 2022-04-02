const express = require('express');
const app = express();
const Sesapp = require('../models/sesapp');
const Order = require('../models/order');
const Purchase = require('../models/purchase');
const Customer = require('../models/customer');

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

    req.flash('success','Food added!!')

    res.redirect(`/foods/cart/${id}`);
}

module.exports.cartList = async(req, res) => {
    const carts = await Sesapp.find({});

    res.render('peppers/carts_index', {carts})
}

