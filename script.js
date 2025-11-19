/*for (i = 0; i <= 1000; i++) {
  console.log(i);
} */

i = prompt("Enter a number between 1 and 1000:");

if (i % 3 === 0 && i % 5 === 0) {
  console.log("FizzBuzz");
} else if (i % 3 === 0) {
  console.log("Fizz");
} else if (i % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(i);
}
