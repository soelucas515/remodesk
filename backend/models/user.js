// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // nombre del usuario
    email: { type: String, required: true, unique: true }, // email único
    role: { type: String, enum: ["client", "admin"], default: "client" } // rol simple
  },
  { timestamps: true } // agrega createdAt y updatedAt
);

const User = mongoose.model("User", userSchema);

module.exports = User;
