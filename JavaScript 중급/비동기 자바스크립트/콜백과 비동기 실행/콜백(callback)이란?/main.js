function sayHello(name) {
  console.log(`Hello ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye ${name}!`);
}

function printMessage(func, name) {
  console.log('Printing message...');
  func(name);
}

// printMessage(sayHello, 'hwichul');
// sayHello 함수를 호출하는 것이 아니라 아규먼트로 전달하는 것이므로 소괄호는 생략하는 것이 중요하다.

// printMessage(function () {
//   console.log('Hello World!!');
// })

printMessage((name) => console.log(`Hello ${name}!!!`), 'hwichul');

// 간단한 콜백 함수에는 화살표 함수를 자주 사용한다.