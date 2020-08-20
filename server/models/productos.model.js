const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema( {
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Productos', ProductoSchema);



