import pool from "../../conexion.bd.mjs"


// obtener los datos
export async function obtenerProductos(){
    const result = await pool.query('SELECT * FROM productos');
    console.log(result)
    return result.rows // --> Dentro del atributo 'rows' en el objeto 'result' se encuentran los productos
}