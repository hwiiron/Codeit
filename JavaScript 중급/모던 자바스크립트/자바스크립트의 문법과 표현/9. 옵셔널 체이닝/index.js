// 옵셔널 체이닝 (Optional Chaining)

// 중첩된 객체에서 프로퍼티에 안전하게 접근할 수 있게 해주는 방법이다.
// 객체가 null이나 undefined일 때 오류 없이 undefined를 반환

function printName(user) {
  console.log(user.dog.name);
}

const user1 = {
  name: 'hwichul',
  dog: {
    name: 'dal',
  }
}

printName(user1); // Crew

const user2 = {
  name: 'Young',
}

console.log(user2.dog); // undefined
printName(user2); // TypeError: Cannot read property 'name' of undefined

// dog 프로퍼티를 가지고 있지 않은 user2는 dog 프로퍼티가 undefined이기 때문에 user2.dog.name에 접근하려는 순간 에러가 발생한다.


// 중첩된 객체의 프로퍼티를 다룰 때는 user.dog.name에 접근하기 전에 user.dog가 null, undefined가 아닌지 검증하고 접근해야 에러를 방지할 수 있다.


function printName(user) {
  console.log(user.dog?.name);
}

// 옵셔널 체이닝 연산자(?.)는 물음표와 마침표를 붙여 사용하는 문법으로, 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 다음 프로퍼티 값을 반환하고 그렇지 않으면 undefined를 반환합니다.


// 옵셔널 체이닝 동작 원리를 삼항 연산자로 표현한다면 아래 소스처럶 표현할 수 있다.
function printName(user) {
  console.log((user.dog === null || user.dog === undefined) ? undefined : user.dog.name);
}


// 추가로 null 병합 연산자(??)와 함께 사용하면 더 유용합니다.
function printName(user) {
  console.log(user.dog?.name ?? '꾸미는 없습니다.');
}

const user2 = {
  name: 'ggum',
}

printName(user2); // 함께 지내는 강아지가 없습니다.

// user2에는 dog 프로퍼티가 없기 때문에 undefined가 되며, 따라서 우측 값인 '꾸미는 없습니다.'가 반환됩니다.
