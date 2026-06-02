import pool from "../../conexion.bd.mjs"


// obtener los datos
export async function obtenerProductos(){
    const result = await pool.query('SELECT * FROM productos');
    console.log(result)
    return result.rows // --> Dentro del atributo 'rows' en el objeto 'result' se encuentran los productos
}

export async function agregarProducto(datos) {
    const { nombre, precio, categoria, imagen, descripcion, stock, talle, descuento } = datos
    const resultado = await pool.query('INSERT INTO productos(nombre, precio, categoria, imagen, descripcion, stock, talle, descuento) VALUES $1, $2 RETURNING id', [nombre, precio, categoria, imagen, descripcion, stock, talle, descuento])
    return resultado.rows
}   