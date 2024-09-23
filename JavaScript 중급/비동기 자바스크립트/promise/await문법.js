// await 문법

const response = await fetch('https://learn.codeit.kr/api/employees');
const data = await response.json();
console.log(data);
// console.log(await response.json());



// 비동기 작업의 결과를 기다리고 있을 때 - Pending
// 비동기 작업이 성공적으로 완료되었을 때 - Fulfilled
// 비동기 작업이 실패했을 때 - Rejected


// promise를 리턴하는 표현식이 있다면 그 앞에 await를 사용해서 결과값을 받아올 수 있다.
// await을 사용하면 promise가 Fulfilled 상태가 될 때까지 기다렸다가 결과값을 돌려주기 때문이다.