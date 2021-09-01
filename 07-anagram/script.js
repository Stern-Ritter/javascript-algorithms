/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  const formatStr1 = str1.toLowerCase();
  const formatStr2 = str2.toLowerCase();
  return formatStr1.length === formatStr2.length && formatStr1 !== formatStr2
    ? formatStr1.split("").reduce((result, el) => result && formatStr2.includes(el), true)
    : false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("finder", "Friend")); // true
console.log(anagram("hello", "bye")); // false
console.log(anagram("", ""));// false