const express = require('express') // Usaremos express para el enrutado
const z = require('zod') // herramienta para validaciones

const movies =require('./movies.json') // Una db fake de movies para probar que funciona la api

const app = express() // inicializamos express
app.use(express.json()) // Middleware para recuperar los body de las request


app.disable('x-powered-by') // Quita el header x-powered-by: express - por seguridad y porque no pagan.

//Rutas

// Ruta / : La raiz tontaca
app.get('/', (req,res) => {
    return res.json("hola bonic!")
})

// Ruta /movies: devuelve todas las pelis
app.get('/movies', (req,res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080') //movida del cors
    return res.json(movies)
})

const PORT = process.env.PORT ?? 1234 // El puertiño

// El server pobret
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})