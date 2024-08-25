const mongoose = require('mongoose');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const invoiceSchema = new mongoose.Schema({
    _id: { type: String, default: () => shortid.generate().substring(0, 4) },
    order_id: String,
    amount: Number,
    status: { type: String, default: 'unpaid' },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
