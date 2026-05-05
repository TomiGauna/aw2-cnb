import express from 'express'

const servidor = express();
const port = 8000;

const middleware = async (req, res, next) => {

    try {
        ///fetch
        const codigoApi = await fetch('http://localhost:4321/usuario');
        const usuario = await codigoApi.json();
        const codigoProy = Number(req.params.codigo);

        ///validacion
        if (usuario.codigo === codigoProy) {
            return next();
        }

        ///envio de mensaje de error
        res.status(400).json({ mensaje: 'El código es INCORRECTO' });
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }

}

servidor.get('/:codigo', middleware, (req, res) => {

    res.status(200).json({ mensaje: 'El código es CORRECTO!!!' })
})

servidor.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}`)
});

