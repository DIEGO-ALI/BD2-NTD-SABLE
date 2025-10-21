const express = require("express");
const router = express.Router();
const articleSchema = require("../models/article");

//Nuevo articulo
router.post("/articulos", (req, res) => {
 const articulo = articleSchema(req.body);
 articulo
 .save()
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error }));

});

//Consultar todos los articuloes
router.get("/articulos", (req, res) => {
 articleSchema.find() //Aqui se hacen las consultas especificas
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error }));
});

//Consultar un articulo por su id
router.get("/articulos/:id", (req, res) => {
 const { id } = req.params;
 articleSchema
 .findById(id)
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error }));
});

//Modificar el titulo de un articulo por su id
router.put("/articulos/:id", (req, res) => {
 const { id } = req.params;
 const { titulo, autores, aniopublicacion, resumen, cantidad_referencias, base_consulta, fuente_publicacion, enlace, pdf } = req.body;
 articleSchema
 .updateOne({ _id: id }, {
 $set: { titulo, autores, aniopublicacion, resumen, cantidad_referencias, base_consulta, fuente_publicacion, enlace, pdf }
 })
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error }));
});

//Eliminar un articulo por su id

router.delete("/articulos/:id", (req, res) => {
 const { id } = req.params;
 articleSchema
 .findByIdAndDelete(id)
 .then((data) => {
 res.json(data);
 })
 .catch((error) => {
 res.json({ message: error });
});
});


module.exports = router;
