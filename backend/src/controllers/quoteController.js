const QuoteRequest = require('../models/QuoteRequest');
const mongoose = require('mongoose');

// @desc    Create a new quote request
// @route   POST /api/quote
// @access  Public
const createQuote = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, phone, and message.' });
    }

    // 💡 Graceful Fallback for UI Testing if MongoDB isn't running
    if (mongoose.connection.readyState !== 1) {
      console.log('⚠️ [Mock Quote Received via Fallback]:', { name, phone, message });
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return res.status(201).json({
        success: true,
        message: 'Mock Lead captured! (Database offline)',
        data: { _id: 'mock_id_123', name, phone, message, status: 'New', createdAt: new Date() }
      });
    }

    // Connect to actual database
    const quote = await QuoteRequest.create({
      name,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      data: quote,
    });
  } catch (error) {
    console.error(`Quote Error: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

module.exports = {
  createQuote,
};
