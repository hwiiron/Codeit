import { getEmployees } from './asyncFcuntions.js';

const employees = await getEmployees();
// async 함수는 항상 Promise 리턴하기 때문에 await을 붙여주지 않으면 Promise를 리턴한다.

console.log(employees);

// async 함수는 항상 Promise를 리턴
// Promise에서 성공 결과 값을 받아오고 싶으면 await을 써주면 된다.