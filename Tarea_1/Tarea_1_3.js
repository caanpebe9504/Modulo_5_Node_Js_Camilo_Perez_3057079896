
/* 
    Punto 3: Búsqueda y Filtrado de Datos:
    Dado el siguiente array de productos:
    
*/
 
let productos = [

    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }

];

// 1. Utilizando `filter` debes filtrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.

    console.log(productos.filter((producto => producto.categoria === "Ropa")))

// 2. Filtra los productos con precio mayor de 30 en un nuevo array llamado `preciosMayores`.

    let preciosMayores = []

    preciosMayores.push(productos.filter((producto => producto.precio > 30)))