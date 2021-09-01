/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    const multiplicity = (i % 3 === 0 ? 1 : 0) + (i % 5 === 0 ? 2 : 0);
    switch (multiplicity) {
      case 0:
        console.log(i);
        break;
      case 1:
        console.log("fizz");
        break;
      case 2:
        console.log("buzz");
        break;
      case 3:
        console.log("fizzbuzz");
    }
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));
