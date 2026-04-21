import gralFs from 'fs';
import http from 'node:http';
import path from 'node:path';
import writer from './modules/writer.mjs';
import reader from './modules/reader.mjs';
import getFirstTen from './modules/getFirstTen.mjs';

const server = http.createServer(async (req, resp) => {

    try {

        if (req.method === 'GET' && req.url === '/usuarios') {


            if (!(gralFs.existsSync(path.resolve('users.json')))) {
                await writer();
                const displayInfo = await reader();
            };

            const displayInfo = await reader();
            resp.statusCode = 200;
            return resp.end(displayInfo)
        };

        if (req.method === 'GET' && req.url === '/usuarios/filtrados') {

            if (!(gralFs.existsSync(path.resolve('users.json')))) {
                return resp.end(`You must go to '/usuarios' root first`);
            };

            const displayInfo = await getFirstTen();
            resp.statusCode = 200;
            return resp.end(displayInfo);
        };

        //Fallback
        resp.statusCode = 404;
        resp.end('Resource not found or usage of an incorrect method');

    } catch (error) {
        console.log(`Error: ${error.message}`);
    };

});


server.listen(3000, () => {
    console.log('Server running in port 3000')
});