const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./src/routes/products'));
// app.use('/api/projects', require('./src/routes/projects'));
app.use('/api/quote', require('./src/routes/quotes'));

app.get('/', (req, res) => {
  res.send('JJ Painting & Hardwares API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
