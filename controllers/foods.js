const Menu = require('../models/menu');
const Sesapp = require('../models/sesapp');
 
module.exports.showMenu = async (req, res) => {
    const starters = await Menu.find({category:'Starters'});
    const salads = await Menu.find({category:'Salads'});
    const burgers = await Menu.find({category:'Burgers'});
    const drinks = await Menu.find({category:'Drinks'});
    const sesapp = await Sesapp.find({});
    const sesIds = [];
    
    for (let i = 0; i < sesapp.length; i++){
        sesIds.push(sesapp[i].id);
    }

    const id = sesIds.slice(-1);

    console.log(id);

    res.render('peppers/menu', {
        id, starters, salads, burgers, drinks
    })
}

module.exports.starters = async (req, res) => {
    const starters = await Menu.find({category:'Starters'});

    res.render('peppers/categories/men_starter', {starters});
}

module.exports.salads = async (req, res) => {
    const salads = await Menu.find({category:'Salads'});

    res.render('peppers/categories/men_salad', {salads});
}

module.exports.burgers = async (req, res) => {
    const burgers = await Menu.find({category:'Burgers'});

    res.render('peppers/categories/men_burger', {burgers});
}

module.exports.drinks = async (req, res) => {
    const drinks = await Menu.find({category:'Drinks'});

    res.render('peppers/categories/men_drink', {drinks});
}