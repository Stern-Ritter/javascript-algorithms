/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, idx) => (idx === 0 ? char.toUpperCase() : char))
        .join("");
    })
    .join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
console.log(capitalize("a a a"));
console.log(capitalize("A ! %"));
console.log(capitalize(""));