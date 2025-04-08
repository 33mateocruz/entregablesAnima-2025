const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Articulo = sequelize.define(
  "Articulo",
  {
    titulo: DataTypes.STRING,
    contenido: DataTypes.STRING,
    usuarioId: DataTypes.STRING,
  },
  {
    tableName: "Articulos",
    timestamps: false,
  }
);

module.exports = Articulo;
