import express from 'express';
import path from 'node:path';

const port = 3000;
const app = express();

//Middleware
function middleware1(req, res, next) {
    console.log('Middleware working');

    if (true) {
        console.log('Wrong credentials')
    } else {
        next();
    }
};

app.get('/', (req, res) => {
    console.log('request')
    res.send('Welcome!')
})

app.use(express.static(path.resolve('index.html')));

app.use('/saludo', middleware1);

app.get('/saludo', (req, res) => {
    console.log('request')
    res.send('Greetings!')
})

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
});