import express from 'express'
import { obtenerProductos } from './funciones.mjs';

const server = express();
const port = 3000;

server.use('/api/v1/', rutasProductos);

// Configurar un API REST básica

server.listen(port, () => {
    console.log(`Server corriendo en puerto ${port}`)
});