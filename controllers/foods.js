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