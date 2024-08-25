const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order_id: String,
    amount: Number,
    status: { type: String, default: 'unpaid' },
    link: String,
});

module.exports = mongoose.model('Payment', paymentSchema);

