const mongoose = require('mongoose');
const { Schema } = mongoose;

menuSchema = new Schema ({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String
    }
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;