
const esperarSegundos = (segundos) => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Han pasado ${segundos} segundos.`); // Mostrar mensaje
        resolve(); // Resolver la promesa
      }, segundos * 1000); // Multiplicar por 1000 para convertir segundos en milisegundos
    });
}

export default esperarSegundos;