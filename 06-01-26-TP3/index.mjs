import express from 'express'
import './inyectar.env.mjs'
import rutasProductos from './modulos/productos/rutas.productos.mjs'
// import rutasUsuarios from './rutas.mjs'

console.log(process.env)
const PUERTO = process.env.PUERTO || 3000

const app = express()
app.use(express.json())
app.use(rutasProductos)

// Configurar un API REST Basica



app.listen(PUERTO)

//Comandos usados:

///Luego de los 2 primeros comandos de docker se utlizo:
//npm i -g pnpm
//pn init
//pn add pg express
//pn add -D nodemon
//pn run dev
//luego para instala dot env: pn add dotenv