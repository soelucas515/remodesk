// backend/server.js
require('dotenv').config({ path: __dirname + '/.env' });
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
// Middleware para parsear JSON
app.use(express.json());

// backend/server.js
const cors = require("cors");

// ...
app.use(cors({ origin: "http://localhost:5173" })); // Permite solo tu frontend local

// Rutas API
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Conectar DB y levantar servidor
const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB conectado");
    app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
  })
  .catch((err) => console.error("❌ Error de conexión:", err));

// Ruta para poblar DB con usuarios de prueba
  const seedRoutes = require("./routes/seedRoutes");
app.use("/api/seed", seedRoutes);
  
