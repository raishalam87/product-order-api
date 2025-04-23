const Order = require('../models/Order');

const placeOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: '✅ Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to place order', error });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderTime: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to fetch orders', error });
  }
};

module.exports = { placeOrder, getOrders };
