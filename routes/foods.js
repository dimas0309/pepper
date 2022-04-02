const express = require('express');
const router = express.Router();
const foods = require('../controllers/foods');
const cart = require('../controllers/cart');
const purchase = require('../controllers/purchase');

router.get('/menu', foods.showMenu);

router.get('/starters', foods.starters);

router.get('/salads', foods.salads);

router.get('/burgers', foods.burgers);

router.get('/drinks', foods.drinks);

router.get('/carts', cart.cartList);

router.get('/cart/:id', cart.showCart);

router.post('/cart/:id/orders', cart.addCart);

router.post('/cart/:id/purchase', purchase.purchaseOrder);

router.get('/purchase', purchase.purchaseInfo);

router.post('/purchase/:id', purchase.purchaseDeliver);

module.exports = router;