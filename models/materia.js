const mongoose = require("mongoose");

const materiaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    }
})

module.exports = mongoose.model('Materia', materiaSchema)