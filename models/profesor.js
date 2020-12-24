const mongoose = require("mongoose");

const profesorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    }
})

module.exports = mongoose.model('profesor', profesorSchema)