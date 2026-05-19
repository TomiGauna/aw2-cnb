import fsp from 'node:fs/promises'
import path from 'node:path'

/*try {
    const content = await fsp.readFile('./texto.txt', 'utf-8');
    console.log(content);
} catch (error) {
    console.log('Error')
} */

try {

    const root = path.join('./texto.txt')
    ///Escritura de archivo
    await fsp.writeFile(root, 'Overwriting!!! v.2');

    ///Lectura de archivo
    const content = await fsp.readFile(root, 'utf-8')

    ///Impresion
    console.log(content);
} catch (error) {
    console.log('Error')
} 