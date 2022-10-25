const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
  nombre: { type: String, required: true },
  detalle: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  marca: { type: String, required: true },
  categoria: { type: String, required: false },
  referencia: { type: String, required: false },
  imagen: { type: String, required: false },
});

module.exports = mongoose.model("productos", ProductosSchema);
