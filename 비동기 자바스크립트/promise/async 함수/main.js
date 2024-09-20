// async 함수

import { printEmployess } from "./asyncFunctions.js";

printEmployess();

console.log('Task 2');

console.log('Task 3');

// async 함수 안에 await을 사용하면 promise가 Fulfilled가 될 때까지 기다리는 동안에는
// 다시 함수 밖으로 나와서 나머지 코드를 실행
// 그리고 promise가 Fulfilled 상태가 되면 다시 함수로 돌아와 코드를 이어서 실행