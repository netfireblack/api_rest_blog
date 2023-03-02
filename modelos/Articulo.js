const { Schema, model} = require("mongoose");

const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    }
});

module.exports = model("Articulo", ArticuloSchema, "articulos"); // por defecto el ORM interpreta el nombre de la coleccion como un nombre similar al nombre del modelo pero en minúsculas y plural (articulos)
                        