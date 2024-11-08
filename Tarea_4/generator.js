import * as fs from 'fs'

let numeros = [];
for (let i = 1; i <= 1000; i++) {
  numeros.push(i);
}

const contenido = numeros.join('\n');

fs.writeFile('numeros.txt', contenido, (err) => {
    if (err) {
      console.error('Hubo un error escribiendo el archivo:', err);
    } else {
      console.log('Archivo generado exitosamente!');
    }
});