const Menu = require('../models/menu');

module.exports.showMenu = async (req, res) => {
    const starters = await Menu.find({category:'Starters'});
    const salads = await Menu.find({category:'Salads'});
    const burgers = await Menu.find({category:'Burgers'});
    const drinks = await Menu.find({category:'Drinks'});

    res.render('peppers/menu', {
        starters, salads, burgers, drinks
    })
}