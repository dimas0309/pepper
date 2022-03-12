const Sesapp = require('../models/sesapp');
const Order = require('../models/order');
const Purchase = require('../models/purchase');

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

module.exports.purchaseOrder = async(req, res) => {
    const {id} = req.params;
    const cart = await Sesapp.findById(id);
    const {total} = req.body;
    const purchase = new Purchase({total});
    cart.purOrder = purchase;
    cart.active = false;
    await cart.save();
    await purchase.save();

    const orders = cart.orders;

    for (let idOR of orders){
        await Sesapp.findOneAndDelete({orders:idOR});
    }

    res.redirect('/foods/carts');
}

module.exports.cartList = async(req, res) => {
    const carts = await Sesapp.find({});

    res.render('peppers/carts_index', {carts})
}

 
