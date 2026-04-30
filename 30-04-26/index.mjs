import express from 'express'

const app = express();
const port = 3000;

const products = [
    {
        id: 1,
        nombre: 'pantalon',
        precio: 20000
    },
    {
        id: 2,
        nombre: 'remera',
        precio: 15000
    }
]

// Parámtros de ruta

app.get('/products', (req, res) => {
    res.json(products)
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id) // <------ Lo trae como una cadena

    const filteredProducts = products.filter((product) => product.id === id);
    res.json(filteredProducts);
});

app.get('/products_dto/:discount', (req, res) => {
    const discount = Number(req.params.discount);
    
    const productsWithDiscount = products.map(prod => {
        const op = prod.precio * (discount / 100)
        return {
            id: prod.id,
            nombre: prod.nombre,
            precio: prod.precio - op
        }
    });

    res.json(productsWithDiscount);
})

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
});