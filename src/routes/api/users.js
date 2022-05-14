const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de todos los actores
router.get('/', userAPIController.list);
//Detalle del actor
router.get('/:id', userAPIController.detail);
//En que peliculas trabajo el actor con id tal
router.get('/:id/movies', userAPIController.actorMovies);

//Agregar un actor
router.post('/create', userAPIController.create);
//Modificar un actor
router.put('/update/:id', userAPIController.update);
//Eliminar un actor
router.delete('/delete/:id', userAPIController.destroy);

module.exports = router;