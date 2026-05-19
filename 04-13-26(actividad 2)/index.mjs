// 1 - Extraer datos desde el endpoint de la API -> FETCH

// 1.1 - Reconfigurara datos

// 2 - Escribir datos en una archivo local

// 3 - Leer datos del archivo guardado

import { dataExtractor } from "./utils/dataExtractor.mjs";
import { readerAndWriter } from "./utils/readerAndWriter.mjs";

try {
    const changedUsers = await dataExtractor();
    const users = await readerAndWriter(changedUsers);
    console.log('result: ' + users);
} catch (error) {
    console.log(`Se produjo un error: ${error.message}`);
}