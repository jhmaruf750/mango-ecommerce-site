import express from "express";
import Mango from "../models/Mango.js";

const router = express.Router();

// 🟢 Get All Mangoes (user side)
router.get("/", async (req, res) => {
  const mangoes = await Mango.find();
  res.json(mangoes);
});

// 🟡 Get Popular Mango only (for "Today's Popular Mango")
router.get("/popular", async (req, res) => {
  const mango = await Mango.findOne({ isPopular: true });
  res.json(mango);
});

// 🔵 Add New Mango (admin use only)
router.post("/", async (req, res) => {
  const mango = new Mango(req.body);
  const saved = await mango.save();
  res.status(201).json(saved);
});

// 🔧 Update Mango (edit stock, price etc.)
router.put("/:id", async (req, res) => {
  const updated = await Mango.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// 🔴 Delete Mango (if needed)
router.delete("/:id", async (req, res) => {
  await Mango.findByIdAndDelete(req.params.id);
  res.json({ message: "Mango deleted" });
});

export default router;
