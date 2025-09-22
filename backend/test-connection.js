// backend/test-connection.js
// Verifica que dotenv cargue MONGODB_URI y prueba conectarse (se desconecta al final).
// Correr desde la raíz del repo: "node backend/test-connection.js" para verificar la inyección de .env
require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
console.log("MONGO_URI (parcial):", uri ? uri.slice(0, 40) + "..." : "(no definida)");

if (!uri) {
  console.error("No hay URI en .env");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Test: conectado OK a MongoDB");
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error("❌ Test: error conectando a MongoDB:", err.message);
    process.exit(1);
  });