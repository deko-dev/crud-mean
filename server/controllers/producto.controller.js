const productoModel = require('../models/productos.model');

const productosController = {}

productosController.getProductos = async (req, res) => {
    const productos = await productoModel.find();

    res.json(productos);

}

productosController.crearProducto = async (req, res) => {

    const producto = new productoModel(req.body);

    await producto.save()

    res.json({
        status: 'Producto guardado'
    })
}

productosController.verProducto = async (req, res) => {

    const producto = await productoModel.findById(req.params.id);

    res.json(producto)
}

productosController.editarProducto = async (req, res) => {

    const producto = {
        name: req.body.name,
        category: req.body.category,
        precio: req.body.precio
    }


    await productoModel.findByIdAndUpdate(req.params.id, {$set: producto}, {new: true});

    res.json({
        status: `Empleado con id ${ req.params.id } actualizado!!`
    })
}

productosController.borrarProducto = async (req, res) => {

    await productoModel.findByIdAndDelete(req.params.id)


    res.json({
        response: 'Producto borrado'
    })
}


module.exports = productosController;