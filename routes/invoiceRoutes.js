const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

router.post('/', async (req, res) => {
    const { order_id, amount } = req.body;
    const newInvoice = new Invoice({
        order_id,
        amount,
        status: 'unpaid'
    });
    try {
        const savedInvoice = await newInvoice.save();
        res.json({
            invoice_id: savedInvoice._id,
            order_id: savedInvoice.order_id,
            amount: savedInvoice.amount,
            status: savedInvoice.status
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const invoice = await Invoice.findById(req.params.id);
    if (invoice) {
        res.json({
            invoice_id: invoice._id,
            order_id: invoice.order_id,
            amount: invoice.amount,
            status: invoice.status
        });
    } else {
        res.status(404).json({ error: 'Invoice not found' });
    }
});

module.exports = router;
