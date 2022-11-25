const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema(
  {
    usuario: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 128 },
    isAdmin: { type: Boolean, default: false, required: true },
  }
);

module.exports = mongoose.model("usuarios", UsuariosSchema);
