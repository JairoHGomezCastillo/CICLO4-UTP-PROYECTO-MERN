const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
  nombre: { type: String, required: true },
  detalle: { type: String, required: true },
  categoria: { type: String, required: false },
  imagen: { type: String, required: false },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  marca: { type: String, required: true },
  clasificacion: { type: Number, required: true },
  referencia: { type: String, required: false },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model("productos", ProductosSchema);
