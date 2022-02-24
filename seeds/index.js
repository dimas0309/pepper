const mongoose = require('mongoose');
const dishes = require('./dishes');
const db = mongoose.connection;
const Menu = require('../models/menu');

mongoose.connect('mongodb+srv://admin:ftBWB99gSnQWnVxs@cluster0.4dwfo.mongodb.net/pepperdb?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

db.on("error", console.error.bind(
    console, "Connection error:"));

db.once("open", () => {
    console.log("Database connected");
})    

const seedDB = async () => {
    await Menu.deleteMany({});
    for (let i = 0; i < 26; i++){
        const menu = new Menu ({
            category: `${dishes[i].category}`,
            name: `${dishes[i].name}`,
            price: `${dishes[i].price}`,
            details: `${dishes[i].details}`, 
        })
        await menu.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})