const mongoose = require('mongoose');
const { Schema } = mongoose;

purchaseSchema = new Schema ({
    total: {
        type: Number,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    sessionApp: {
        type: Schema.Types.ObjectId,
        ref: 'SessionApp'
    }
})

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;

