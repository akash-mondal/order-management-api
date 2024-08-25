const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create Order
router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
});

// Cancel Order
router.post('/:id/cancel', async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        order.status = 'cancelled';
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
});

// Check Order Status
router.get('/:id/status', async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.json({ status: order.status });
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
});

module.exports = router;

