// async function printEmployees () {
//   const response = await fetch('https://learn.codeit.kr/api/employees');
//   const data = await response.json();
//   console.log(data);
// }

// const dataPromise = fetch('https://learn.codeit.kr/api/employees')
//                     .then((response) => response.json());
// dataPromise.then((data) => console.log(data));


fetch('https://learn.codeit.kr/api/employees')
  .then((response) => response.json())
  .then((data) => console.log(data));

  // .then(function(data) {
  //   console.log(data);
  // })

// Promise가 Fulfilled 상태가 되면(비동기 작업이 끝나면) 다음 .then() 메소드에 등록되어 있는 콜백이 성공 결과 값을 가지고 실행된다.