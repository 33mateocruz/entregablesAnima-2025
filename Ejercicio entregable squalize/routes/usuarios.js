const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getUsuarios);
router.get("/:id", usuarioController.getUsuarioPorId);
router.post("/", usuarioController.crearUsuario);
router.patch("/:id", usuarioController.actualizarUsuario);
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;
