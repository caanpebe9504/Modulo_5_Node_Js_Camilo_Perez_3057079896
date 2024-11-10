
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => {
  if (b === 0) {
    return 'Error: No se puede dividir entre cero';
  }
  return a / b;
};

const calcular = (num1, operacion, num2) => {
  // Convertir los argumentos a números flotantes
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Error: Por favor ingresa números válidos.';
  }

  // Realizar la operación según el operador
  switch (operacion) {
    case "+":
      return suma(num1, num2);
    case "-":
      return resta(num1, num2);
    case "*":
      return multiplicacion(num1, num2);
    case "/":
        console.log('Operación: División');
      return division(num1, num2);
    default:
      return 'Error: Operación no válida. Usa +, -, * o /.';
  }
};

const [,, num1, operacion, num2] = process.argv;
console.log(process.argv)

console.log(`Recibido: num1 = ${num1}, operacion = ${operacion}, num2 = ${num2}`);

const resultado = calcular(num1, operacion, num2);
console.log(`Resultado: ${resultado}`)