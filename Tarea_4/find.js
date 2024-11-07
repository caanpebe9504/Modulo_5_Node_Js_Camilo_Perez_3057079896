const fs = require('fs');


fs.readFile('numeros.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Hubo un error leyendo el archivo:', err);
    return;
  }

  
  const numeros = data.split('\n');
  
  
  const pares = numeros.filter(numero => {
    return parseInt(numero) % 2 === 0; 
  });

  
  console.log('Números pares:', pares);

  
fs.writeFile('pares.txt', pares.join('\n'), (err) => {
    if (err) {
      console.error('Hubo un error escribiendo el archivo de pares:', err);
    } else {
      console.log('Archivo de números pares guardado como "pares.txt"');
    }
  });
});