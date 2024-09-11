// 함수를 만드는 방법
function 함수이름 (파라미터) {
  동작

  return 리턴값
}


// 함수 표현식 - 함수 선언을 변수에 할당하는 방법
const print = function () {
  console.log('!!!');
}

print();


const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {
  console.log('btn checked!')
})



// 파라미터 (Parameter)
function 함수명(파라미터) {
  console.log(`${파라미터}`);
}

함수명('아규먼트');

// 함수 선언 부분애서 소괄호 안에 작성된 것이 파라미터,
// 함수를 호출하는 부분에서 파라미터로 전달하는 값을 아규먼트



// 아규먼트 (arguments)
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printArguments('Young', 'Mark', 'Koby');



// Rest Parameter
function printArguments(...args) {
  console.log(args.splice(0, 2));
  console.log(argments.splice(0, 2)); // argments는 유사 배열이기에 에러
}

printArguments('Young', 'Mark', 'Koby');


function printRank (first, second, ...others) {
  console.log(`1등 : ${first}`);
  console.log(`2등 : ${second}`);
  
  for (let arg of others) {
    console.log(`참가자 : ${arg}`);
  }
}

printRank('달이', '꾸미', '은주', '휘철', '바미');



// 화살표 함수 (Arrow Function

// 화살표 함수는 익명 함수

// 화살표 함수 적용 전
const getTwice = function (number) {
  return number * 2;
}

console.log(getTwice(5));

const myBtn2 = document.querySelector('#myBtn');

myBtn2.addEventListener('click', function () {
  console.log('clicked!');
})
// 화살표 함수 적용 전


// 화살표 함수 적용 후 - function을 지우고 소괄호 오른쪽 => 추가
const getTwice2 = (number) => {
  return number * 2;
}

console.log(getTwice2(5));

const myBtn3 = document.querySelector('#myBtn');

myBtn3.addEventListener('click', () => {
  console.log('clicked!');
})


const getTwice3 = number => number * 2;

console.log(getTwice3(5));
// 화살표 함수 적용 후


function normalFunc () {
  console.log(arguments);
}

const arrowFunc = () => {
  console.log(arguments);
}

normalFunc(1, 2, 3); // [1, 2, 3]
arrowFunc(1, 2, 3); // 에러
// 화살표 함수는 아규먼트 객체를 사용하는 함수라면 화살표 함수는 사용 불가



// this
console.log(this); // window 객체


const user = {
  firstName: 'eunju',
  lastName: 'jeong',
  getFullName: function () {
    return `${user.firstName} ${user.lastName}`
  }
}

console.log(user.getFullName()); // eunju jeong


// 다른 객체에도 적용하려고 함수 외부로 분리하면
function getFullName () {
  return `${user2.firstName} ${user2.lastName}`
}

const user2 = {
  firstName: 'eunju',
  lastName: 'jeong',
  getFullName: getFullName,
};

const admin = {
  firstName: 'hwichul',
  lastName: 'shin',
  getFullName: getFullName,
};

console.log(user2.getFullName()); // eunju jeong
console.log(admin.getFullName()); // eunju jeong