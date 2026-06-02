-- Conectar a la base de datos 'tienda'
\c tienda;

-- Crear la tabla 'productos'
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    precio NUMERIC(10, 2),
    categoria VARCHAR(200),
    imagen VARCHAR(350),
    descripcion VARCHAR(400),
    stock NUMERIC(10),
    talle VARCHAR(3),
    descuento VARCHAR(2)
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100)
)

CREATE TABLE ordenes (
    id SERIAL PRIMARY KEY
    nombre VARCHAR(200),
    total NUMERIC(10, 2),
)

-- Insertar 10 productos deportivos
INSERT INTO productos (producto, precio) VALUES
    ('Pelota de fútbol', 25.99),
    ('Raqueta de tenis', 89.99),
    ('Pelota de básquet', 29.99),
    ('Guantes de boxeo', 45.00),
    ('Patines en línea', 79.95),
    ('Bicicleta de montaña', 499.99),
    ('Tabla de surf', 299.99),
    ('Mancuerna de 10 kg', 20.50),
    ('Cinta de correr', 699.00),
    ('Soga para saltar', 10.99),
    ('Casco de bicicleta', 39.99),
    ('Mochila de trekking', 59.99),
    ('Carpa para acampar', 149.99),
    ('Antiparras de natación', 15.99),
    ('Paleta de ping pong', 12.99),
    ('Bate de béisbol', 35.00),
    ('Pelota de vóley', 22.50),
    ('Kettlebell de 15 kg', 45.00),
    ('Bolsa de dormir', 79.99),
    ('Chaleco salvavidas', 49.99);


INSERT INTO productos (
    id, 
    nombre, 
    precio, 
    categoria,
    imagen,
    descripcion,
    stock,
    talle,
    descuento) VALUES

    (
        1, 
        "REMERA EMILIA",
        20500.00,
        "Remeras",
        "https://dcdn-us.mitiendanube.com/stores/005/043/120/products/tezza-1281-3c19a05ba41c26d99517768066772877-1024-1024.webp",
        "Remera CROP con frunce al costado",
        2,
        "M",
        10);