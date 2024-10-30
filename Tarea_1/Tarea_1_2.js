
// Punto 2: Cálculo de Estadísticas Básicas:
//  Dado el siguiente array de estudiantes y utilizando un bucle for:
    
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

// 1. Calcula la suma de las edades de todos los estudiantes en el array

let sumaEdades = 0 

for (let i = 0; i < estudiantes.length; i++){
    sumaEdades += estudiantes[i].edad    
}

// 2. Calcula el promedio de edad de los estudiantes.

let promedioEdad = sumaEdades / estudiantes.length

// 3. Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

console.log(`La suma de las edades de todos los estudiantes es: ${sumaEdades}`)
console.log(`El promedio de edad de los estudiantes es: ${promedioEdad} `)
