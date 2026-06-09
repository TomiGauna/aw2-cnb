import express from 'express';
import cookieParser from 'cookie-parser';

const PUERTO = process.env.PUERTO || 4000;

////////////////
const credenciales = {
    usuario: 'admin',
    clave: '123'
}
////////////////
const app = express();

app.use(cookieParser('frasesecreta'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/////

function chequearCookie(req, res, next) {
    const cookie = req.signedCookies['sesionId']
    if (cookie === 'id123') {
        return next()
    } else {
        //res.status(304).json({mensaje: 'credenciales incorrectas'})
        res.redirect('/login')
    }
}
app.use('/admin', chequearCookie, express.static('./fronts/front-admin'))
/////
app.use('/login', express.static('./fronts/front-login'))

app.post('/autenticar', (req, res) => {
    /// Verificamos las credenciales en DB
    console.log(req.body)
    const { usuario, pass } = req.body
    if (credenciales.usuario === usuario && credenciales.clave === pass){
        res.cookie('sesionId', 'id123', {
            signed: true,
            sameSite: 'lax',
            httpOnly: true,
            secure: true
        })
        return res.redirect('/admin')
    }
    res.json({
        mensaje: 'login'
    })
})




app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});

