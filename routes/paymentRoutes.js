const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Invoice = require('../models/Invoice');
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    const { invoice_id, order_id, amount } = req.body;
    try {
        const newPayment = new Payment({
            order_id: order_id,
            amount: amount,
            status: 'paid',
            link: ''
        });
        const savedPayment = await newPayment.save();
        savedPayment.link = `https://pay.example.com/${savedPayment._id}`;
        await savedPayment.save();

        const updatedInvoice = await Invoice.findByIdAndUpdate(invoice_id, { status: 'paid' }, { new: true });
        if (!updatedInvoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }

        const updatedOrder = await Order.findByIdAndUpdate(order_id, { status: 'completed' }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json({
            payment: savedPayment,
            invoice: {
                invoice_id: updatedInvoice._id,
                order_id: updatedInvoice.order_id,
                amount: updatedInvoice.amount,
                status: updatedInvoice.status
            },
            order: updatedOrder
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
