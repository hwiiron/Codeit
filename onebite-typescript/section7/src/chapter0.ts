/**
 * 제네릭
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
