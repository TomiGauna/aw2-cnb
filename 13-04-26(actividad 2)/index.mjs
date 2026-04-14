// 1 - Extraer datos desde el endpoint de la API -> FETCH

// 1.1 - Reconfigurara datos

// 2 - Escribir datos en una archivo local

// 3 - Leer datos del archivo guardado

import fsp from 'node:fs/promises';
import path  from 'node:path';

try {
    const resp = await fetch('https://api.escuelajs.co/api/v1/users');
    const users = await resp.json(); // <-- convierte texto JSON a objeto JavaScript

    const modifiedUsers = users.map((elemento) => {
        
        const changedUser = {
            id: elemento.id,
            email: elemento.email,
            name: elemento.name
        }
        return changedUser
    })

    // Escritura del archivo
    const root = path.resolve('usuarios.json'); // --> Resuelve ruta absoluta
    const stringedData = JSON.stringify(modifiedUsers, null, 4);
    await fsp.writeFile(root, stringedData)

    //Lectura de archivo
    const localUsers = await fsp.readFile(root, 'utf-8');
    console.log(localUsers);
} catch (error) {
    console.log(error)
}