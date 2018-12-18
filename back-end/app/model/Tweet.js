const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: true
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = new mongoose.model("Tweet", tweetSchema);
