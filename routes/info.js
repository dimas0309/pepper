const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
	res.render('peppers/about');
});

router.get('/contact', (req, res) => {
	res.render('peppers/contact');
});

module.exports = router;