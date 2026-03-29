const Product = require('../models/Product');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { category, page = 1, limit = 12 } = req.query;
    const mongoose = require('mongoose');

    // 💡 Graceful Fallback for UI Testing if MongoDB isn't running
    if (mongoose.connection.readyState !== 1) {
      const dummyProducts = [
        { _id: '1', name: 'Premium Interior Matte Paint', category: 'Paints', brand: 'Nippon', description: 'High quality paint.', image: '/product-images/color-delight-image.png' },
        { _id: '2', name: 'Exterior Emulsion Gold', category: 'Paints', brand: 'Asian Paints', description: 'Exterior weather shield.', image: '/product-images/Exterior-Emulsion-Gold.webp' },
        { _id: '3', name: 'CPVC Pipes', category: 'Plumbing', brand: 'Ashirvad', description: 'High-pressure CPVC piping.', image: '/product-images/ashirvad-cpvc-pipe.jpg' },
        { _id: '4', name: 'Crompton LED Bulb', category: 'Electrical', brand: 'Crompton', description: 'Energy efficient LED bulb.', image: '/product-images/ldlsrn28-cdl-crompton-original-imagpnd7cg4etb64.webp' },
        { _id: '5', name: 'Copper Wire Coil', category: 'Electrical', brand: 'Polycab', description: 'Heavy gauge copper.', image: '/product-images/wire.jpg' },
        { _id: '6', name: 'Modular Switch Plate', category: 'Electrical', brand: 'Anchor', description: 'Modern modular electrical switch.', image: '/product-images/switch-1.jpg' },
        { _id: '7', name: 'LED Panel Light', category: 'Electrical', brand: 'Philips', description: 'Slim LED ceiling panel.', image: '/product-images/led-panel.jpg' },
        { _id: '8', name: 'Heavy Duty Tool', category: 'Tools', brand: 'Generic', description: 'Professional grade hardware.', image: '/product-images/41HqUjs56pL._AC_UF894,1000_QL80_.jpg' },
      ];

      let filtered = dummyProducts;
      if (category && category !== 'All') {
        filtered = filtered.filter(p => p.category === category);
      }
      
      const skip = (parseInt(page) - 1) * parseInt(limit);
      const paginated = filtered.slice(skip, skip + parseInt(limit));

      return res.json({
        products: paginated,
        page: parseInt(page),
        pages: Math.ceil(filtered.length / parseInt(limit)),
        total: filtered.length,
        fallbackMode: true // Tells frontend we're in mock mode
      });
    }
    
    // Build query
    const query = {};
    if (category && category !== 'All') {
      query.category = category;
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const products = await Product.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments(query);

    res.json({
      products,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      total,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getProducts,
};
