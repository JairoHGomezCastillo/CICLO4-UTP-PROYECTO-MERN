const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.login = function(req, res, next){

  let hashedpass = crypto.createHash("sha512").update(req.body.password).digest("hex");

  Usuario.findOne({ email: req.body.email, password: hashedpass }, function (err, usuario) {
      let response = {
        token: null,
        email: usuario.email,
        password: usuario.password,
      };

      if (usuario !== null) {
        response.token = jwt.sign(
          {
            email: usuario.email,
            password: usuario.password
          },
          "__recret__"
        );
      }
      res.json(response);
  })
  

}
