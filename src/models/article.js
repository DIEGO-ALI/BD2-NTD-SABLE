const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autores: { type: String, required: true },
  aniopublicacion: { type: Number, required: true },
  resumen: { type: String, required: true },
  cantidad_referencias: { type: Number, required: true },
  base_consulta: { type: String, required: true },
  fuente_publicacion: { type: String, required: true },
  enlace: { type: String, required: true },
  pdf: { type: String, required: true }
});


module.exports = mongoose.model("Article", articleSchema);
