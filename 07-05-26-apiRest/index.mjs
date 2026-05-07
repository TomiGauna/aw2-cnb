import express from 'express'
import { obtenerProductos } from './funciones.mjs';

const server = express();
const port = 3000;

////Configuración de API REST Básica

///GET /api/v1/productos
server.get('/api/v1/productos', obtenerProductos);

///GET /api/v1/productos/:id
//server.get('/api/v1/productos/:id')

///POST /api/v1/productos
//server.post('/api/v1/productos')


///PUT /api/v1/productos/:id
//server.put('/api/v1/productos/:id')

///DELETE /api/v1/productos/:id 
//server.delete('/api/v1/productos/:id')


server.listen(port, () => {
    console.log(`Server corriendo en puerto ${port}`)
})