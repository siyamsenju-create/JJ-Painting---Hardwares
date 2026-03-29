const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./src/models/Product');
const connectDB = require('./src/config/db');

dotenv.config();

const dummyProducts = [
  {
    name: 'Premium Interior Matte Paint',
    category: 'Paints',
    brand: 'Nippon Paint',
    description: 'High-quality, durable matte finish for interior walls. Excellent coverage and low VOC.',
    image: 'https://images.unsplash.com/photo-1562259929-b7e181d8d9b5?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Exterior Weatherproof Shield',
    category: 'Paints',
    brand: 'Asian Paints',
    description: 'Advanced exterior emulsion that protects walls from extreme weather conditions.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Professional Roller Set',
    category: 'Tools',
    brand: 'Harris',
    description: 'Pro-grade 9-inch paint roller setup for smooth finishes on large surfaces.',
    image: 'https://images.unsplash.com/photo-1588693892015-ab2fa2772cf8?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Heavy Duty Power Drill',
    category: 'Tools',
    brand: 'DeWalt',
    description: '20V Max cordless drill with high torque for demanding projects.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Industrial Valve Pipe',
    category: 'Plumbing',
    brand: 'Finolex',
    description: 'Standard PVC valve fitting for high pressure water systems.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Copper Core Wire Coil',
    category: 'Electrical',
    brand: 'Polycab',
    description: 'Heavy gauge copper wiring for residential and commercial electrical needs.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Chrome Finish Faucet',
    category: 'Plumbing',
    brand: 'Jaquar',
    description: 'Modern elegant chrome faucet for bathrooms.',
    image: 'https://images.unsplash.com/photo-1585058204276-cff8d5bfd9ec?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Steel Fasteners Pack',
    category: 'Hardware',
    brand: 'Generic',
    description: 'High-tensile steel fasteners and bolts for construction.',
    image: 'https://images.unsplash.com/photo-1517420704952-d9f3ee5c56c7?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'LED Industrial Bulb',
    category: 'Electrical',
    brand: 'Philips',
    description: 'High lumen output LED bulb for large commercial spaces.',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Multi-Bit Screwdriver Set',
    category: 'Tools',
    brand: 'Stanley',
    description: 'Complete set of precision screwdrivers for any hardware task.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600',
  }
];

const seedData = async () => {
  try {
    await connectDB();
    
    await Product.deleteMany();
    console.log('Cleared existing products');
    
    await Product.insertMany(dummyProducts);
    console.log('Dummy products inserted successfully');
    
    process.exit();
  } catch (error) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

seedData();
