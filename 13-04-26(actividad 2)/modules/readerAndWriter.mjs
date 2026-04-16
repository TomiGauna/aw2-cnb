/// MÓDULO DE LECTURA Y ESCRITURA DEL ARCHIVO

import fsp from 'node:fs/promises';
import path from 'node:path';

async function readerAndWriter(modifiedUsers) {
    try {
        // Escritura del archivo
        const root = path.resolve('usuarios.json'); // --> Resuelve ruta absoluta
        const stringedData = JSON.stringify(modifiedUsers, null, 4);
        await fsp.writeFile(root, stringedData)
    
        //Lectura de archivo
        const localUsers = await fsp.readFile(root, 'utf-8');
        return localUsers;

    } catch (error) {
        console.log(`Se produjo un error: ${error.message}`);
    };
};

export { readerAndWriter }
