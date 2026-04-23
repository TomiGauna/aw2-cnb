import express from 'express'

const port = 3000;

//Instancia de servidor express
const app = express();

const getter = (req, res) => {
    res.set('content-type', 'text/html');
    res.status(200);
    res.end('<h1>Hi express!</h1>');
};

app.get('/', getter);

app.get('/saludo', (req, res) => {
    res.end('<h1>Hello</h1>')
});


app.post('/', () => {
    res.end('POST verb usage'); //Descargar 'Thunder Client' para verificar que anda
});

app.listen(port, () => {
    console.log(`Server running in port nº ${port}`)
})

///192.169.0.numeromaquina