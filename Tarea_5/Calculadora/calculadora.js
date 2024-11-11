const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num2 !== 0 ? num1/num2 : 'Error: No se puede dividir entre cero'

const calculo = (num1, operacion, num2) => {
  

  if (isNaN(num1) || isNaN(num2)) {
    return 'Error: Por favor ingresa números válidos.';
  }

  switch (operacion) {
    case "+":
      return suma(num1, num2);
    case "-":
      return resta(num1, num2);
    case "*":
      return multiplicacion(num1, num2);
    case "/":
      return division(num1, num2);
    default:
      return 'Error: Operación no válida. Usa +, -, * o /.';
  }
};

const [num1, operacion, num2] = process.argv.slice(2);

console.log(`Recibido: Primer Número = ${num1}, Operación = ${operacion}, Segundo Número = ${num2}`);

const resultado = calculo(num1, operacion, num2);
console.log(`Resultado: ${resultado}`);