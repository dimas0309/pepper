const mongoose = require('mongoose');
const { Schema } = mongoose;

orderSchema = new Schema ({
    food: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    sessionApp: {
        type: Schema.Types.ObjectId,
        ref:'Sesapp'
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

