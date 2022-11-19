const Producto = require("../models/productos.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let producto = new Producto({
    nombre: req.body.nombre,
    detalle: req.body.detalle,
    categoria: req.body.categoria,
    imagen: req.body.imagen,
    precio: req.body.precio,
    stock: req.body.stock,
    marca: req.body.marca,
    clasificacion: req.body.clasificacion,
    referencia: req.body.referencia,
    descripcion: req.body.descripcion,
  });

  producto.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el producto");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El producto "+producto.nombre+" se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Producto.find(function (err, producto) {
    res.json(producto);
  });
};

exports.update = function (req, res) {
  let producto = {
    nombre: req.body.nombre,
    detalle: req.body.detalle,
    categoria: req.body.categoria,
    imagen: req.body.imagen,
    precio: req.body.precio,
    stock: req.body.stock,
    marca: req.body.marca,
    clasificacion: req.body.clasificacion,
    referencia: req.body.referencia,
    descripcion: req.body.descripcion,
  };

  Producto.findByIdAndUpdate(req.params.id, { $set: producto }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el producto");
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = "El producto "+producto.nombre +" modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Producto.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el producto");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El producto eliminado correctamente");
    res.json(response);
  });
};

exports.findOne = function (req, res) {
  Producto.findOne({ detalle: req.params.detalle }, function (err, producto) {
    res.json(producto);
  });
};
