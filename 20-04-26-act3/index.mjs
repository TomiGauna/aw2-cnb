import fileSystem from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';

const dataGetter = async () => {

    try {
        const data = await fetch('https://api.escuelajs.co/api/v1/users');
        const info = data.json();
        return info;
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
    }
};

const readerAndWriter = async () => {

    try {
        const root = path.resolve('users.json');
        const users = await dataGetter()
        const dataToString = JSON.stringify(users, null, 4);
        await fileSystem.writeFile(root, dataToString);

        const usersOnFile = await fileSystem.readFile(root, 'utf-8');
        return usersOnFile
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
};

const getFirstTen = async (users) => {
    
    let filteredUsers = await users.filter(user => user.id < 10)
    return filteredUsers
}

const server = http.createServer(async (req, resp) => {

    if (req.method === 'GET' && req.url === '/usuarios') {

        const displayInfo = await readerAndWriter();
        resp.statusCode = 200;
        return resp.end(displayInfo)
    };

    if (req.method === 'GET' && req.url === '/usuarios/filtrados') {

        const users = await readerAndWriter();
        const displayInfo = getFirstTen(users);
        resp.statusCode = 200;
        return resp.end(displayInfo)
    };

    //Fallback
    resp.statusCode = 404;
    resp.end('Resource not found or incorrect method used') 
});



server.listen(3000, () => {
    console.log('Server running in port 3000')
});