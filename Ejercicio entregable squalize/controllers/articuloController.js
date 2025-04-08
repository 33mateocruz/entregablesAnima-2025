const Articulo = require("../models/articulo");

exports.getArticulos = async (req, res) => {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos:", error);
    res.status(500).json({ error: "Error al obtener artículos" });
  }
};
