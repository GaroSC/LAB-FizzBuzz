// Reto: FizzBuzz desde el número 1 hasta 1000.

/* Reglas:
    - Si el número es divisible entre 3, imprimir "Fizz".
    - Si el número es divisible entre 5, imprimir "Buzz".
    - Si el número es divisible entre 3 y 5, imprimir "FizzBuzz".
    - Si no es divisible entre ninguno, imprimir el número.
*/

// Inicialización de la variable para el ciclo.
let numero = 0;

//El ciclo for itera desde 1 hasta 1000.
for (numero = 1; numero <= 1000; numero++) {
  // Condicionales para verificar las reglas de FizzBuzz.
  // La condición más específica (divisible entre 3 y 5) se verifica primero.
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Luego se verifican las siguientes condiciones.
    else if (numero % 3 === 0) {
    console.log("Fizz");
  } else if (numero % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numero);
  }
}

