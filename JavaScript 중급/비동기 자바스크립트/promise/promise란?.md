### Promise란?

`promise`는 비동기 작업이 완료되면 값을 알려주는 객체입니다.
작업이 완료되면 값을 알려주는 것을 약속하기 때문에 이름이 `promise`이다.

```
const response = fetch('https://learn.codeit.kr/api/employees');
console.log(response); // Promise { <pending> }
```

`fetch`는 오래 걸리는 작업이기 때문에 결과값을 바로 돌려줄 수 없어서 일단 promise를 돌려주고 나중에 작업이 완료되면 결과값을 `promise`에 채워준다는 개념이다.

자바스크립트에서 비동기 코드가 `promise`를 활용하는 이유는 `promise`기반의 소스 코드가 평소에 쓰는 코드와 비슷하고,
익숙한 형태로 코드를 작성할 수 있다는게 `promise`문법의 장점이기 때문입니다.


### promise를 다루는 방법
1. `.then()` 메소드 + 콜백
2. `.async`와 `await` 문법