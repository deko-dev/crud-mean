const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');


router.get('/', productoController.getProductos);

router.post('/', productoController.crearProducto);

router.get('/:id', productoController.verProducto);

router.put('/:id', productoController.editarProducto);

router.delete('/:id', productoController.borrarProducto);




module.exports = router;

