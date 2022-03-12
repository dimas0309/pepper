const mongoose = require('mongoose');
const { Schema } = mongoose;

purchaseSchema = new Schema ({
    total: {
        type: Number,
        required: true
    }
})

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;

