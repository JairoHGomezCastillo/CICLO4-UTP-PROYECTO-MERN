const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");

router.post("/", productosController.create);
router.get("/", productosController.find);
router.get("/:detalle", productosController.findOne);
router.get("/id/:id", productosController.findId);
router.put("/:id", productosController.update);
router.delete("/:id", productosController.remove);

module.exports = router;