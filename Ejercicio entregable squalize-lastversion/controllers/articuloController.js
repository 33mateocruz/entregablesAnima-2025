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

exports.getArticuloPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const articulo = await Articulo.findByPk(id);
    if (articulo) {
      res.json(articulo);
    } else {
      res.status(404).json({ error: "Artículo no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener artículo por ID:", error);
    res.status(500).json({ error: "Error al obtener artículo por ID" });
  }
};

exports.crearArticulo = async (req, res) => {
  const { titulo, contenido, usuarioId } = req.body;

  try {
    const nuevoArticulo = await Articulo.create({
      titulo,
      contenido,
      usuarioId,
    });
    res.status(201).json(nuevoArticulo);
  } catch (error) {
    console.error("Error al crear artículo:", error);
    res.status(500).json({ error: "Error al crear artículo" });
  }
};

exports.actualizarArticulo = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, usuarioId } = req.body;

  try {
    const articulo = await Articulo.findByPk(id);
    if (articulo) {
      articulo.titulo = titulo || articulo.titulo;
      articulo.contenido = contenido || articulo.contenido;
      articulo.usuarioId = usuarioId || articulo.usuarioId;

      await articulo.save();
      res.json(articulo);
    } else {
      res.status(404).json({ error: "Artículo no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar artículo:", error);
    res.status(500).json({ error: "Error al actualizar artículo" });
  }
};

exports.eliminarArticulo = async (req, res) => {
  const { id } = req.params;

  try {
    const articulo = await Articulo.findByPk(id);
    if (articulo) {
      await articulo.destroy();
      res.status(204).json({ message: "Artículo eliminado" });
    } else {
      res.status(404).json({ error: "Artículo no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar artículo:", error);
    res.status(500).json({ error: "Error al eliminar artículo" });
  }
};
