import mongoose from "mongoose";

const mangoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pricePerKg: { type: Number, required: true },
    availableKg: { type: Number, required: true },
    description: String,
    image: String, // public folder path or URL
    isPopular: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Mango = mongoose.model("Mango", mangoSchema);
export default Mango;
