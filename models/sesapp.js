const mongoose = require('mongoose');
const { Schema } = mongoose;

sesappSchema = new Schema ({
    sessionNum: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    purOrder: {
        type: Schema.Types.ObjectId,
        ref: 'Purchase'
    }
    

})

const Sesapp = mongoose.model('Sesapp', sesappSchema);
module.exports = Sesapp;

