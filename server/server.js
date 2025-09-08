// -------------------- server.js --------------------
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Fuse = require("fuse.js"); // For fuzzy search

const app = express();
const PORT = 5000;

// -------------------- MIDDLEWARES --------------------
app.use(cors()); // Allow requests from different ports (frontend)
app.use(bodyParser.json());

// -------------------- MONGODB CONNECTION --------------------
const MONGO_URI = "mongodb://127.0.0.1:27017/groceryDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// -------------------- SCHEMAS & MODELS --------------------

// Contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// Order schema
const orderSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  cartItems: Array,
  totalAmount: Number,
  paymentMethod: String,
  date: { type: Date, default: Date.now },
});
const Order = mongoose.model("Order", orderSchema);

// ✅ Product schema (updated to match DB)
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: String,   // was Number, but your DB stores "1kg", "5kg"
  description: String,
  rating: Number,
  inStock: Boolean,
  loose: Boolean,
});
const Product = mongoose.model("Product", productSchema);

// -------------------- ROUTES --------------------

// 1️⃣ Contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !message)
    return res.status(400).json({ message: "Name and message required" });

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact message received!", data: newContact });
  } catch (err) {
    console.error("❌ Contact error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 2️⃣ Submit order
app.post("/api/order", async (req, res) => {
  const { customerName, customerEmail, cartItems, totalAmount, paymentMethod } = req.body;

  if (!customerName || !cartItems || cartItems.length === 0)
    return res.status(400).json({ message: "Incomplete order details" });

  try {
    const newOrder = new Order({
      customerName,
      customerEmail,
      cartItems,
      totalAmount,
      paymentMethod,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (err) {
    console.error("❌ Order error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 3️⃣ Add a new product
app.post("/api/products", async (req, res) => {
  const { name, category, price, quantity, description, rating, inStock, loose } = req.body;

  if (!name || !category || price == null)
    return res.status(400).json({ message: "Name, category, and price required" });

  try {
    const newProduct = new Product({
      name,
      category,
      price,
      quantity,
      description,
      rating,
      inStock,
      loose,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product added!", product: newProduct });
  } catch (err) {
    console.error("❌ Product add error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 4️⃣ Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("❌ Get products error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 5️⃣ Search products (regex + fuzzy fallback)
app.get("/api/search", async (req, res) => {
  const query = req.query.q ? req.query.q.trim() : "";
  if (!query) return res.json([]); // No search term → empty list

  try {
    console.log(`🔍 Searching for: "${query}"`);

    // 1️⃣ Exact MongoDB regex search (case-insensitive)
    let results = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });

    console.log(`📦 Regex results found: ${results.length}`);

    // 2️⃣ If nothing found, use Fuse.js fuzzy search
    if (results.length === 0) {
      const allProducts = await Product.find();
      const fuse = new Fuse(allProducts, {
        keys: ["name", "category", "description"],
        threshold: 0.6, // Adjust for fuzziness
      });
      results = fuse.search(query).map((r) => r.item);
      console.log(`📦 Fuse results found: ${results.length}`);
    }

    res.json(results);
  } catch (error) {
    console.error("❌ Search error:", error);
    res.status(500).json({ message: "Error searching products" });
  }
});
// 6️⃣ Get single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error("❌ Get product error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
