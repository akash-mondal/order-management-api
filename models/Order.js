const mongoose = require('mongoose');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const orderSchema = new mongoose.Schema({
    _id: { type: String, default: () => shortid.generate().substring(0, 4) },
    user_id: String,
    items: Array,
    status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Order', orderSchema);
