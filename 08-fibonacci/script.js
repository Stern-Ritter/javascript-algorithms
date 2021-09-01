/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
 */

function fibonacci(n) {
  if (typeof n !== 'number' || n <= 1) {
    return 0;
  } else {
    let previous = 0;
    let current = 1;
    for (let i = 3; i <= n; i++) {
      current += previous;
      previous = current - previous;
    }
    return current;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(-99)); // 0
console.log(fibonacci('a')); // 0
console.log(fibonacci('')); // 0
console.log(fibonacci()); // 0