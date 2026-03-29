const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Failed: ${error.message}`);
    console.warn(`⚠️ Running backend without database. UI will use dummy data fallback.`);
    // 💡 Intentionally NOT calling process.exit(1) so the Express server stays alive
  }
};

module.exports = connectDB;
