const express = require("express");
const router = express.Router();
const articuloController = require("../controllers/articuloController");

router.get("/", articuloController.getArticulos);
router.get("/:id", articuloController.getArticuloPorId);
router.post("/", articuloController.crearArticulo);
router.patch("/:id", articuloController.actualizarArticulo);
router.delete("/:id", articuloController.eliminarArticulo);

module.exports = router;
