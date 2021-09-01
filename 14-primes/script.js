/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function primes(num) {
  if(typeof num !== 'number') {
    return [];
  }
  let result = [];
  for (let i = 2; i <= num; i++) {
    let prime = true;
    for (let j = 2, s = Math.sqrt(i); j <= s; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) result.push(i);
  }
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
console.log(primes(-10)); // []
console.log(primes('6')); // []
console.log(primes([])); // []
