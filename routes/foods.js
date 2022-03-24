const express = require('express');
const router = express.Router();
const foods = require('../controllers/foods');
const cart = require('../controllers/cart');

router.get('/menu', foods.showMenu);

router.get('/starters', foods.starters);

router.get('/salads', foods.salads);

router.get('/burgers', foods.burgers);

router.get('/drinks', foods.drinks);

router.get('/carts', cart.cartList);

router.get('/cart/:id', cart.showCart);

router.post('/cart/:id/orders', cart.addCart);

router.post('/cart/:id/purchase', cart.purchaseOrder);

router.get('/purchase', cart.purchaseInfo);

router.post('/purchase/:id', cart.purchaseDeliver);

module.exports = router;