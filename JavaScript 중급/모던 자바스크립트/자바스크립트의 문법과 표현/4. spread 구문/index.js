// Spread 구문 (Spread Syntax)
const numbers = [1, 2, 3];

console.log(numbers);
console.log(...numbers);
console.log(1, 2, 3);





// Rest Parameter는 여러 개의 아규먼트를 하나의 파라미터로 묶는 방식이고,
// Spread 구문은 하나로 묶여있는 값을 각각의 개별값으로 펼치는 방식

// const sumAll = (...arg) => {
const sumAll = function (...args) {
  let sum = 0;

  for (arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4));




// 객체 타입의 값들은 변수에 값이 직접 할당되는 것이 아니라 주소값이 참조되므로 결과값 같음.
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing;

interactiveWeb.push('JavaScript');

console.log(webPublishing); // ['HTML', 'CSS', 'JavaScript']
console.log(interactiveWeb); // ['HTML', 'CSS', 'JavaScript']


// .slice() 메소드로 복제해서 interactiveWeb2에만 JavaScript 추가
const webPublishing2 = ['HTML', 'CSS'];
const interactiveWeb2 = webPublishing2.slice();

interactiveWeb2.push('JavaScript');

console.log(webPublishing2); // ['HTML', 'CSS']
console.log(interactiveWeb2); // ['HTML', 'CSS', 'JavaScript']


// spread 구문을 활용하여 메소드를 사용하지 않고 배열 복사 가능
const webPublishing3 = ['HTML', 'CSS'];
const interactiveWeb3 = [...webPublishing3];

interactiveWeb3.push('JavaScript');

console.log(webPublishing3); // ['HTML', 'CSS']
console.log(interactiveWeb3); // ['HTML', 'CSS', 'JavaScript']


// spread 구문을 활용하면 값을 바로 요소를 추가 가능
const webPublishing4 = ['HTML', 'CSS'];
const interactiveWeb4 = [...webPublishing4, 'JavaScript'];

// interactiveWeb3.push('JavaScript');

console.log(webPublishing4); // ['HTML', 'CSS']
console.log(interactiveWeb4); // ['HTML', 'CSS', 'JavaScript']




// spread 구문으로 배열을 합칠 수 있다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 4, 5, 6]


// concat() 메소드로도 합칠 수 있지만 spread 구문을 활용한 방법이 직관적이다.
const arr4 = arr1.concat(arr2);
console.log(arr4); // [1, 2, 3, 4, 5, 6]



// spread 구문의 배열을 펼치고 중괄호로 감싸서 객체로 만들기
const members = ['꿈', '달', '밤'];

const newObject = {...members};

console.log(newObject); // { '0': '꿈', '1': '달', '2': '밤' }


// Spead 구문은 배열을 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다.