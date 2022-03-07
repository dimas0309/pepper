const express = require('express');
const router = express.Router();
const foods = require('../controllers/foods');
const cart = require('../controllers/cart');

router.get('/menu', foods.showMenu);

router.get('/carts', cart.cartList);

router.get('/cart/:id', cart.showCart);

router.post('/cart/:id/orders', cart.addCart);

module.exports = router;