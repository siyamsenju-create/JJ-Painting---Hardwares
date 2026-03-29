const mongoose = require('mongoose');

const quoteRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    message: {
      type: String,
      required: [true, 'Please include your project details'],
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Quoted', 'Converted', 'Closed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

// Graceful fallback for mongoose.models
const QuoteRequest = mongoose.models.QuoteRequest || mongoose.model('QuoteRequest', quoteRequestSchema);

module.exports = QuoteRequest;
