### Promise란?

`Promise`란 비동기 작업이 완료되면 값을 알려주는 메소드이다.
`Promise`는 세 가지 상태가 있는데

1. `Pending` : 비동기 작업 중
2. `Fulfilled` : 비동기 작업 성공, 비동기 작업 성공 결과를 결과값으로 갖게 됨.
3. `Rejected` : 비동기 작업 실패, 비동기 작업에서 발생한 오류를 결과값으로 갖게됨.

<br>

### fetch

`fetch` 함수는 브라우저에서 제공하는 함수로, 네트워크 요청을 보내 데이터를 가져오는 함수이다.
`fetch()`는 데이터를 요청하고, 그 결과를 `Promise` 형태로 반환한다.

<br>

### `async`, `await` 문법

```
const result = await Promise;

// 예시
const response = await fetch('https://learn.codeit.kr/api/employees');
```

`Promise` 객체 앞에 `await` 키워드를 쓰면 `Promise`의 상태가 `Fulfilled`, `Rejected`가 될 떄까지 기다린다.

- `Fulfilled`가 되면 `Promise` 객체의 결과값을 리턴
- `Rejected`가 되면 `Promise` 객체의 결과값(오류)을 `throw`

<br>

`Promise` 객체의 결과값을 가져오려면 항상 앞에 `await`을 붙여야 하고, `await`은 보톹 `async` 함수 안에서 사용한다.

```
// 일반 function
async function printEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  console.log(data);
}

// Arrow function
const printEmployees = async () => {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  console.log(data);
}
```

<br>

`async` 함수는 안에서 `await`을 마주치면, 함수 밖의 나머지 코드를 실행하고, `Promise` 객체가 `Fulfilled`, `Rejected` 상태가 되면 다시 함수로 돌아와 코드를 실행

```
async function printEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  console.log(data);
}

printEmployees();

// async 함수 안에서 await을 만나서 가장 먼저 출력
console.log('가장 먼저 출력!');
```

<br>

`async` 함수는 항상 `Promise`를 리턴하므로 `async` 함수에서 리턴하는 값을 가져오려면 `await`을 활용해야 한다.

```
async function getEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  return data;
}

const employees = await getEmployees(); // await을 생략하면 employees에 Promise 객체가 할당됩니다.
```

- 함수 안에서 Promise를 리턴하면 그 Promise를 그대로 리턴한다.
- 함수 안에서 평범한 값을 리턴하면 그 값을 결과값으로 갖는 Promise를 리턴한다.

<br>

### 오류 처리

try, catch, finally를 활용하여 오류를 처리할 수 있다.

```
async function printEmployees() {
  try {
    const response = await fetch('https://learn.codeit.krrrrr/api/employees');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('error!');
    return;
  } finally {
    console.log('finished');
  }
}
```

<br>

### ```.then()``` 메소드

```.then()```은 `Promise` 객체의 메소드이다.

```
fetch('https://learn.codeit.kr/api/employees')
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log('Task 2');
console.log('Task 3');
```
```
// 출력
Task 2
Task 3
[
  {
    id: 1,
    name: 'Jason',
    email: 'jason@codeitmall.kr',
    department: 'engineering'
  },
  ...
]
```
`.then()` 매소드는 Promise 객체가 `Fulfilled` 상태가 될 때까지 기다렸다가 `Fulfilled` 상태가 되면 안에 있는 콜백을 실행한다.<br>
이때 앞선 `Promise`의 결과값을 콜백의 아규먼트로 전달, `Promise`를 기다리는 동안에는 이후에 있는 코드를 실행한다.

`.then()` 메소드도 `async` 함수와 기능적으로 같고, 코드 스타일과 가독성에 따라 선택이 달라지는 것 뿐이라고 한다.

따라서 `.then()`을 연결해서 쓸 수 있고, 이걸 Promise 체인이라고 부른다.

<br>

### `.then()` 메소드 오류 처리

`Promise` 체인에서는 `.catch()`, `.finally()` 메소드를 통해 오류를 처리한 수 있다.

```
fetch('https://learn.codeit.krrrr/api/employees')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log('error!'))
  .finally(() => console.log('finished'));
```

- `.then()`은 앞선 `Promise`가 `Fulfilled` 상태가 되면 안에 있는 콜백을 실행하고, 앞선 `Promise`의 결과값을 콜백의 아규먼트로 전달
- `.catch()`는 앞선 `Promise`가 `Rejected` 상태가 되면 안에 있는 콜백을 실행, 앞선 `Promis`e의 결과값(오류)을 콜백의 아규먼트로 전달
- `.finally()`는 앞선 `Promise`가 `Fulfilled`, `Rejected` 상태가 되면 안에 있는 콜백 실행

<br>

### `Promise.all()`

`Promise.all()`은 여러 `Promise`를 동시에 기다릴 때 사용하고, `Promise.all()` 자체도 `Promise`를 리턴한다.

아규먼트로 전달된 Promise들이 모두 Fulfilled 상태가 되면 Promise도 Fulfilled 상태가 되고,
Promise 중 하나라도 Rejected 상태가 되면 `Promise.all()`이 리턴하는 Promise는 Rejected 상태가 된다.

```
async function getEmployee(id) {
  const response = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
  const data = await response.json();
  return data;
}

const promises = [];

for (let i = 1; i < 11; i++) {
  promises.push(getEmployee(i));
}

let employees;

try {
  employees = await Promise.all(promises);
} catch (error) {
  console.log(error);
}

console.log(employees);
```

```
[
  {
    id: 1,
    name: 'Jason',
    email: 'jason@codeitmall.kr',
    department: 'engineering'
  },
  {
    id: 2,
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'engineering'
  },
  ...
]
```

`Promise.all()`은 여러 비동기 작업을 한꺼번에 처리할 때 유용하게 쓰인다.