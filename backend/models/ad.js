import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
  url: String,
  imageUrl: String,
  size: {
    type: String,
    enum: ["small", "medium", "big"]
  },
  linkText: String,
  user: String
})

export default mongoose.model('Ad', adSchema);