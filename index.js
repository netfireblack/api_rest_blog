const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

// Inicializar app
console.log("App de node arrancada");

// Conectar a la base de datos
conexion();

// Crear servidor Node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json()); // recibir datos por content-type: application/json
app.use(express.urlencoded({extended:true})); // recibir datos por content-type: application/x-www-form-urlencoded

//RUTAS
const rutas_articulos = require("./rutas/articulo");

// Cargo las rutas
app.use("/api", rutas_articulos);

// Rutas prueba hardcodeadas
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando");

    return res.status(200).json([{
        curso: "Master en React",
        autor: "Pablo Troncoso WEB",
        url: "pablo-troncoso.click/master-react"
    },
    {
        curso: "Master en React",
        autor: "Pablo Troncoso WEB",
        url: "pablo-troncoso.click/master-react"
    },
]);

});

app.get("/", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando");

    return res.status(200).send(
        "<h1>Empezando a crear un api rest con node</h1>"
    );

});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+puerto);
});