import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  remainingSmallAds: Number,
  remainingMediumAds: Number,
  remainingBigAds: Number,
  isAdmin: Boolean
})

export default mongoose.model('User', userSchema);