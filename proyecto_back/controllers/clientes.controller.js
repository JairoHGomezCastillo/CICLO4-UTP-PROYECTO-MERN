const Cliente = require("../models/clientes.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let cliente = new Cliente({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correo: req.body.correo,
  });

  cliente.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el cliente");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Cliente.find(function (err, clientes) {
    res.json(clientes);
  });
};

exports.findOne = function (req, res) {
  Cliente.findOne({ _id: req.params.id }, function (err, cliente) {
    res.json(cliente);
  });
};

exports.update = function (req, res) {
  let cliente = {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correo: req.body.correo,
  };

  Cliente.findByIdAndUpdate(req.params.id, { $set: cliente }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el cliente");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Cliente.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el cliente");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente eliminado correctamente");
    res.json(response);
  });
};
