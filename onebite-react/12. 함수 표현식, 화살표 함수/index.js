function funcA() {
  console.log('funcA');
}

let varA = funcA;

console.log(varA)
varA();


// 함수 표현식
let varB = function () { // 익명함수
  console.log('funcB');
}

varB();
// funcB(); // 오류 발생 - 함수의 이름으로는 호출 불가
// 변수에 담긴 함수는 선언식이 아니다.
console.log('---------------------');



// 화살표 함수
// let varC = function() {
//   return 1;
// };

let varC = (value) => {
  return value + 1;
};

// let varC = () => 1;

console.log(varC(10));