/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 *
 */

function factorial(n) {
  if(typeof n !== 'number' || n < 0) {
    return null;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
console.log(factorial(-11)); // null
console.log(factorial('a')); // null
console.log(factorial('17')); // null
console.log(factorial()); // null
