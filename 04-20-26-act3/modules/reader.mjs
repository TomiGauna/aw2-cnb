import nodeFs from 'node:fs/promises';
import path from 'node:path';

const reader = async() => {
    try {

        const root = path.resolve('users.json');
        const usersOnFile = await nodeFs.readFile(root, 'utf-8');
        return usersOnFile;

    } catch (error) {
        console.log(`Error reading the file: ${error.message}`);
    };
};

export default reader
