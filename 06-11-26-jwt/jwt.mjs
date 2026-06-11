/// DOCS
/// https://www.npmjs.com/package/jsonwebtoken
/// https://www.jwt.io/

import jwt from 'jsonwebtoken'

//función sign
//función verify

///Encotrado como Payload
const datosUtiles = {
    usuario: 'tomas',
    rol: 0
}

jwt.sign(datosUtiles, 'clave-secreta', { expiresIn: '20s' }, (error, token) => {
    if (error) {
        return console.log(error)
    }
    console.log(token)

    jwt.verify(token, 'clave-secretaa', (error, datosUtiles) => {
        if (error) {
            return console.log(error)
        }
        console.log(datosUtiles)
    })
})
