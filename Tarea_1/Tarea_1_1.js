
/* 

Punto 1: Acceso y Modificación Básica de Datos:** Dado el siguiente array de libros

*/

let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
     

// 1. Imprime en la consola el nombre y el autor del segundo libro.
    console.log(`El libro es ${libros[1].titulo} y su autor es ${libros[1].autor}`)

// 2. Actualiza el número de páginas del primer libro a 350.
    libros[0].paginas = 350

// 3. Imprime en la consola la información completa del primer libro después de la actualización.
    console.log(libros[0])

// 4. Utiliza la función `map` para generar un nuevo array de libros que solo tenga las propiedades `titulo` y `autor`

const result = () => {
    return libros.map(libro => `{Titulo: ${libro.titulo}, autor: ${libro.autor} }`)
}



