const express = require("express");
const router = express.Router();
const articuloController = require("../controllers/articuloController");

router.get("/", articuloController.getArticulos);

module.exports = router;
