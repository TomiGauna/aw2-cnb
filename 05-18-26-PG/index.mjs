import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'
// import rutasUsuarios from './rutas.mjs'


const PUERTO = 3000

const app = express()

app.use(rutasProductos)

// Configurar un API REST Basica



app.listen(PUERTO)

//Pasos para docker y postgres

//1 - Levantar primer comando del archivo instalar-comandos-docker.txt (Levanta la imagen)

//2 - Ejecutar segundo comando del mismo archivo

//3 - Descargar Database Client

//4 - Conectar con datos necesarios (estan en el 2do comando de docker)

//5 - Click en 'Create connection'