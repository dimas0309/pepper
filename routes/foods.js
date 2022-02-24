const express = require('express');
const router = express.Router();
const foods = require('../controllers/foods');

router.get('/menu', foods.showMenu);

module.exports = router;