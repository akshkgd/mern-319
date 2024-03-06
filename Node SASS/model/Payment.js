const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    id: {type:String},
    email: {type: String },
    phone: {type: Number},
    amount: {type: Number},
    status: {type: String},
    orderId: {type: String},
    method: {type: String},
    desc: {type: String},
    date: {type: String}
})

module.exports = mongoose.model('payment', PaymentSchema)