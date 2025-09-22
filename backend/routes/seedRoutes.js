// backend/routes/seedRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    await User.deleteMany(); // Limpia usuarios viejos
    await User.insertMany([
      { name: "Alice Demo", email: "alice@demo.com", role: "client" },
      { name: "Bob Demo", email: "bob@demo.com", role: "admin" },
    ]);
    res.json({ message: "Usuarios de prueba creados" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
