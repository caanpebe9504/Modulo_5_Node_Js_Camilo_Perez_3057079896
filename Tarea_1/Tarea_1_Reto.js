
/* RETO (Opcional): 

 Si quieres retarte te invitamos a crear un programa que sea capaz de
 recorrer el array estudiantes de el punto 2 y encontrar a el/la estudiante con el mayor promedio, 
 utilizando un bucle for o cualquer otro método visto en clase

*/

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let mayorPromedio = estudiantes[0]

for (let i = 0; i < estudiantes.length; i++){
    
    estudiantes[i].promedio > mayorPromedio.promedio ? mayorPromedio = estudiantes[i] : null
}

console.log(`El estudiante con mayor promedio es ${mayorPromedio.nombre} con un promedio de ${mayorPromedio.promedio} `)