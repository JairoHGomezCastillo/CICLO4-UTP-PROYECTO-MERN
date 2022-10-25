const Producto = require("../models/productos.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let producto = new Producto({
    nombre: req.body.nombre,
    detalle: req.body.detalle,
    precio: req.body.precio,
    stock: req.body.stock,
    marca: req.body.marca,
    categoria: req.body.categoria,
    referencia: req.body.referencia,
    imagen: req.body.imagen,
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
      (response.msg = "El producto se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Producto.find(function (err, producto) {
    res.json(producto);
  });
};

exports.findOne = function (req, res) {
  Producto.findOne({ _id: req.params.id }, function (err, producto) {
    res.json(producto);
  });
};

exports.findOne = function (req, res) {
  Producto.findOne({ nombre: req.params.nombre }, function (err, producto) {
    res.json(producto);
  });
};

exports.update = function (req, res) {
  let producto = {
    nombre: req.body.nombre,
    detalle: req.body.detalle,
    precio: req.body.precio,
    stock: req.body.stock,
    marca: req.body.marca,
    categoria: req.body.categoria,
    referencia: req.body.referencia,
    imagen: req.body.imagen,
  };

  Producto.findByIdAndUpdate(req.params.id, { $set: producto }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el producto");
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = "El producto modifico correctamente");
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
