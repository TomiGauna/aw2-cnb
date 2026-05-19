import path from 'node:path';
import nodeFs from 'node:fs/promises';
import dataGetter from './dataGetter.mjs';

const writer = async() => {

    try {
        const root = path.resolve('users.json');
        const users = await dataGetter()
        const dataToString = JSON.stringify(users, null, 8);
        await nodeFs.writeFile(root, dataToString);

    } catch (error) {
        console.log(`Error writing the file: ${error.message}`);
    };
};

export default writer