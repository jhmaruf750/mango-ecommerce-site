// ✅ Full Updated index.js (server)
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import mangoRoutes from "./routes/mangoRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")));

// MongoDB Connect
mongoose
  .connect("mongodb://127.0.0.1:27017/contactFormDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schemas
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const orderSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  orderItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  paymentMethod: String,
  transactionNumber: String,
  paymentFromNumber: String,
  deliveryType: String,
  address: String,
  coupon: String,
  discount: Number,
  date: { type: Date, default: Date.now },
});

// Models
const Contact = mongoose.model("Contact", contactSchema);
const Order = mongoose.model("Order", orderSchema);

// Routes
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the Contact & Order API Server!");
});

// Contact API
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: "Message received and saved to database!" });
  } catch (err) {
    console.error("❌ Contact Save Error:", err);
    res.status(500).json({ message: "Error saving contact to database" });
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ message: "Error fetching contacts" });
  }
});

// Order API
app.post("/api/orders", async (req, res) => {
  console.log("📦 Received Order:", req.body);
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(200).json({ message: "Order received and saved successfully!" });
  } catch (err) {
    console.error("❌ Order Save Error:", err);
    res.status(500).json({ message: "Error saving order to database" });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// ✅ Mango Inventory Routes
app.use("/api/mango", mangoRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
