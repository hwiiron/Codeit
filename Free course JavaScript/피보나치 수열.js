// 피보나치 수열

let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  future = previous + current;
  previous = current;
  current = future;
}