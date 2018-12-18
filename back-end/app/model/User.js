const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/auth").secret;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 8);
});

userSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  },
  generateToken() {
    // first param: unique value of the user
    // second param: secret string of the app
    return jwt.sign({ id: this.id }, secret, {
      expiresIn: 86400
    });
  }
};

module.exports = mongoose.model("User", userSchema);
