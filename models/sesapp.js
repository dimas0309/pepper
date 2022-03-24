const mongoose = require('mongoose');
const { Schema } = mongoose;

sesappSchema = new Schema ({
    sessionNum: {
        type: String,
        required: true
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
})

const Sesapp = mongoose.model('Sesapp', sesappSchema);
module.exports = Sesapp;

