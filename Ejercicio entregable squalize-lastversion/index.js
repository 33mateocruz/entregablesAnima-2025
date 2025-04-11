const express = require("express");
const app = express();
const sequelize = require("./config/database");

const Usuario = require("./models/usuario");
const Articulo = require("./models/articulo");

app.use(express.json());

app.use("/usuarios", require("./routes/usuarios"));
app.use("/articulos", require("./routes/articulos"));

app.get("/", (req, res) => {
  res.send(
    "¡API on! Podes acceder a /usuarios o /articulos buscndo en la terminal"
  );
});

sequelize
  .authenticate()
  .then(() => console.log("Conectado a MySQL correctamente."))
  .catch((err) => console.error("Error al conectar a MySQL:", err));

sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos sincronizada");
  app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
    console.log("Rutas a probar en http://localhost:3000/usuarios");
    console.log("Rutas a probar en http://localhost:3000/articulos");
  });
});
