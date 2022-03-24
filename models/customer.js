const mongoose = require('mongoose');
const { Schema } = mongoose;

customerSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    purchase: {
        type: Schema.Types.ObjectId,
        ref: 'Purchase'
    },
    created_at:{
        type: Date,
        default: Date.now()
    }

})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;