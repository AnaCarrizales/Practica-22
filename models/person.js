//inyectamos dependencia
const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({
    nombre:String,
    edad: Number,
    tipoSangre: String,
    nss: String
})

//se necesitan dos parámetros, nombre de la colección y nombre del esquema
module.exports = mongoose.model('Persons',PersonSchema);