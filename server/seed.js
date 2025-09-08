// seed.js
const mongoose = require("mongoose");

// MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/groceryDB";
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Product schema
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: String,
  description: String,
  rating: Number,
  inStock: Boolean,
  loose: Boolean
});
const Product = mongoose.model("Product", productSchema);

// ------------------ Products ------------------

// Atta products
const attaProducts = [
  { name: "Aashirvaad Atta 1kg", price: 65, rating: 4.5, inStock: true },
  { name: "Aashirvaad Atta 5kg", price: 305, rating: 4.7, inStock: true },
  { name: "Multigrain Atta 1kg", price: 75, rating: 4.6, inStock: true },
  { name: "Multigrain Atta 5kg", price: 370, rating: 4.8, inStock: true },
  { name: "Multigrain Atta 11kg", price: 790, rating: 4.4, inStock: false },
  { name: "Lalita Atta 1kg", price: 55, rating: 4.2, inStock: true },
  { name: "Lalita Atta 5kg", price: 250, rating: 4.3, inStock: true },
  { name: "Annapurna Atta 1kg", price: 60, rating: 4.6, inStock: true },
  { name: "Annapurna Atta 5kg", price: 275, rating: 4.7, inStock: true },
  { name: "Fortune Atta 0.5kg", price: 30, rating: 4.1, inStock: true },
  { name: "Fortune Atta 1kg", price: 60, rating: 4.4, inStock: true },
  { name: "Fortune Atta 5kg", price: 295, rating: 4.5, inStock: true }
];

// Rice products
const riceProducts = [
  { name: "Santhamani CC 25kg" },
  { name: "Santhamani HMT 25kg" },
  { name: "Bell HMT 25kg" },
  { name: "Lalita HMT 25kg" },
  { name: "Brundhavanam CC 25kg" },
  { name: "Brundhavanam HMT 25kg" },
  { name: "DKR CC 25kg" },
  { name: "DKR CD 25kg" },
  { name: "DKR HMT 25kg" },
  { name: "27 HMT 26kg" },
  { name: "999 CC 25kg" },
  { name: "999 HMT 25kg" },
  { name: "SCN CC 25kg" },
  { name: "SCN HMT 25kg" },
  { name: "Akshaya CC 5kg" },
  { name: "Akshaya CC 10kg" },
  { name: "Akshaya HMT 5kg" },
  { name: "Akshaya HMT 10kg" },
  { name: "Akshaya HMT 25kg" }
];

// Whole grains
const wholeGrains = [
  { name: "Foxtail Millet 0.5kg", rating: 4.6, inStock: true },
  { name: "Barnyard Millet 0.5kg", rating: 4.5, inStock: true },
  { name: "Little Millet 0.5kg", rating: 4.4, inStock: true },
  { name: "Kodo Millet 0.5kg", rating: 4.3, inStock: true },
  { name: "Proso Millet 0.5kg", rating: 4.2, inStock: true },
  { name: "Sorghum 0.5kg", rating: 4.3, inStock: true },
  { name: "Browntop Millet 0.5kg", rating: 4.4, inStock: true },
  { name: "Pearl Millet 0.5kg", rating: 4.2, inStock: true },
  { name: "Barley loose", rating: 4.1, inStock: true, loose: true },
  { name: "Oats (Lion Brand) 0.5kg", rating: 4.5, inStock: true },
  { name: "Oats (Lion Brand) 1kg", rating: 4.6, inStock: true }
];

// Dal & Pulses
const dalPulses = [
  { name: "Kandipapu (Agrorich) 1kg", rating: 4.6, inStock: true },
  { name: "Kandipapu (Sona) 1kg", rating: 4.5, inStock: true },
  { name: "Kandipapu (Sona) loose", rating: 4.5, inStock: true, loose: true },
  { name: "Kandipapu (Akolla) loose", rating: 4.4, inStock: true, loose: true },
  { name: "Minapapu (Double Horse) 0.5kg", rating: 4.4, inStock: true },
  { name: "Minapapu (Double Horse) 1kg", rating: 4.4, inStock: true },
  { name: "Minapapu (Gopuram) loose", rating: 4.3, inStock: true, loose: true },
  { name: "Pasarapapu (Double Horse) 0.5kg", rating: 4.3, inStock: true },
  { name: "Pasarapapu (Double Horse) 1kg", rating: 4.3, inStock: true },
  { name: "Pasarapapu (Thumb Up) loose", rating: 4.2, inStock: true, loose: true },
  { name: "Channapapu (Shakti) 0.5kg", rating: 4.4, inStock: true },
  { name: "Channapapu (Shakti) 1kg", rating: 4.4, inStock: true },
  { name: "Channapapu (Loose Chocolate) loose", rating: 4.3, inStock: true, loose: true },
  { name: "Kabuli Chana 250g–1kg", rating: 4.3, inStock: true, loose: true },
  { name: "Kombu Chana 250g–1kg", rating: 4.2, inStock: true, loose: true },
  { name: "Bathani White 250g–1kg", rating: 4.3, inStock: true, loose: true },
  { name: "Bathani Green 250g–1kg", rating: 4.3, inStock: true, loose: true },
  { name: "Pesalu 250g–1kg", rating: 4.3, inStock: true, loose: true },
  { name: "Mingulu 250g–1kg", rating: 4.2, inStock: true, loose: true },
  { name: "Gingulu 250g–1kg", rating: 4.2, inStock: true, loose: true },
  { name: "Kandulu 250g–1kg", rating: 4.2, inStock: true, loose: true },
  { name: "Kodumulu 250g–1kg", rating: 4.3, inStock: true, loose: true },
  { name: "Solu 250g–1kg", rating: 4.1, inStock: true, loose: true },
  { name: "Chengudulu 250g–1kg", rating: 4.2, inStock: true, loose: true },
  { name: "Rajma 250g–1kg", rating: 4.4, inStock: true, loose: true },
  { name: "Soyabean (Chikkudu Pikkalu) 250g–1kg", rating: 4.3, inStock: true, loose: true }
];

// Oil & Ghee
const oilGheeProducts = [
  { name: "Aadhaar Sunflower Oil 1L", rating: 4.5, inStock: true },
  { name: "Aadhaar Sunflower Oil 0.5L", rating: 4.5, inStock: true },
  { name: "Aadhaar Sunflower Oil 5L", rating: 4.6, inStock: true },
  { name: "Aadhaar Sunflower Oil 15L", rating: 4.6, inStock: true },
  { name: "Freedom Oil 1L", rating: 4.5, inStock: true },
  { name: "Freedom Oil 0.5L", rating: 4.5, inStock: true },
  { name: "Freedom Oil 5kg", rating: 4.6, inStock: true },
  { name: "Freedom Oil 15kg", rating: 4.6, inStock: true },
  { name: "Groundnut Oil 1L", rating: 4.4, inStock: true },
  { name: "Form Oil (Alpha) 1L", rating: 4.5, inStock: true },
  { name: "Form Oil (Alpha) 15kg", rating: 4.6, inStock: true },
  { name: "Form Oil (Priya Gold) 1L", rating: 4.4, inStock: true },
  { name: "Form Oil (Priya Gold) 15kg", rating: 4.5, inStock: true },
  { name: "Form Oil (Ruchi Gold) 1L", rating: 4.4, inStock: true },
  { name: "Form Oil (Ruchi Gold) 15kg", rating: 4.5, inStock: true },
  { name: "Form Oil (First Class) 1L", rating: 4.3, inStock: true },
  { name: "Form Oil (First Class) 15kg", rating: 4.4, inStock: true },
  { name: "Amul Ghee 200g", rating: 4.7, inStock: true },
  { name: "Amul Ghee 500g", rating: 4.8, inStock: true },
  { name: "Amul Ghee 1kg", rating: 4.8, inStock: true },
  { name: "Hatsun Ghee 100g", rating: 4.6, inStock: true },
  { name: "Hatsun Ghee 200g", rating: 4.6, inStock: true },
  { name: "Hatsun Ghee 0.5kg", rating: 4.6, inStock: true },
  { name: "Hatsun Ghee 1kg", rating: 4.6, inStock: true },
  { name: "Nani Ghee 5₹", rating: 4.5, inStock: true },
  { name: "Nani Ghee 10₹", rating: 4.5, inStock: true },
  { name: "Nani Ghee 50g", rating: 4.5, inStock: true },
  { name: "Nani Ghee 100g", rating: 4.5, inStock: true },
  { name: "Nani Ghee 200g", rating: 4.5, inStock: true },
  { name: "Nani Ghee 0.5kg", rating: 4.5, inStock: true },
  { name: "Nani Ghee 1kg", rating: 4.5, inStock: true },
  { name: "GRB Ghee 200g", rating: 4.6, inStock: true },
  { name: "GRB Ghee 0.5kg", rating: 4.6, inStock: true },
  { name: "GRB Ghee 1kg", rating: 4.6, inStock: true }
];

// ------------------ Combine All ------------------
const allProducts = [
  ...attaProducts.map(p => ({
    ...p,
    category: "Atta",
    quantity: p.name.match(/\d+kg|\d+0?\.?5?kg/) ? p.name.match(/\d+kg|\d+0?\.?5?kg/)[0] : "1kg",
    description: "Available in stock",
    loose: false
  })),
  ...riceProducts.map(p => ({
    ...p,
    category: "Rice",
    price: 0,
    quantity: p.name.match(/\d+kg/) ? p.name.match(/\d+kg/)[0] : "25kg",
    description: "Available in stock",
    rating: 0,
    inStock: true,
    loose: false
  })),
  ...wholeGrains.map(p => ({
    ...p,
    category: "Whole Grains",
    price: 0,
    quantity: p.name.match(/\d+kg/) ? p.name.match(/\d+kg/)[0] : "0.5kg",
    description: "Available in stock",
    loose: p.loose || false
  })),
  ...dalPulses.map(p => ({
    ...p,
    category: "Dal & Pulses",
    price: 0,
    quantity: p.name.match(/\d+kg/) ? p.name.match(/\d+kg/)[0] : "1kg",
    description: "Available in stock",
    loose: p.loose || false
  })),
  ...oilGheeProducts.map(p => ({
    ...p,
    category: p.name.toLowerCase().includes("oil") ? "Oil" : "Ghee",
    price: 0,
    quantity: p.name.match(/\d+L|\d+g|₹\d+/) ? p.name.match(/\d+L|\d+g|₹\d+/)[0] : "1kg",
    description: "Available in stock",
    loose: false
  }))
];

// ------------------ Seed DB ------------------
const seedDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(allProducts);
    console.log("✅ All products added successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error inserting products:", err);
  }
};

seedDB();
