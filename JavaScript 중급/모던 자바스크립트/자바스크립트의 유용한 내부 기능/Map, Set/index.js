// Map
// Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷하다.
// 할당 연산자를 통해 추가하고 점, 대괄호 표기법으로 접근하는 일반 객체와 다르게
// Map은 메소드를 통해서 값을 추가하거나 접근할 수 있다.

// new 키워드를 통해서 Map을 만들 수 있고 메소드를 통해서 Map 안의 여러 값들을 다룰 수 있다.

// new Map(): Map 생성
// map.set(key, value): key를 이용해 value를 추가하는 메소드
// map.get(key): key에 해당하는 값을 얻는 메소드, key가 존재하지 않으면 undefined를 반환
// map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드
// map.delete(key): key에 해당하는 값을 삭제하는 메소드
// map.clear(): Map 안의 모든 요소를 제거하는 메소드
// map.size: 요소의 개수를 반환하는 프로퍼티 (메소드가 아니며 배열의 length 프로퍼티와 같은 역할)


// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0



// Set

// Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷하다.
// 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있다.
// Map처럼 new 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있다.

// new Set(): Set 생성
// set.add(value): 값을 추가하는 메소드 (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환)
// set.has(value): Set안에 값이 존재하면 true, 아니면 false를 반환하는 메소드
// set.delete(value): 값을 제거하는 메소드 (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 실패하면 false 반환)
// set.clear(): Set안의 모든 요소를 제거하는 메소드
// set.size: 요소의 개수를 반환하는 프로퍼티 (메소드가 아니며 배열의 length 프로퍼티와 같은 역할)

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0


// 일반 객체는 프로퍼티 네임으로, Map은 get 메소드로, 배열은 index를 통해서 개별 값에 접근할 수 있는데
// Set에는 개별 값에 접근할 수 있는 방법이 없다.

// 그럼에도 Set을 사용하게 되는 이유는 중복을 허용하지 않는 값을 모을 때 유용하게 사용된다고 한다.


// Set 생성
const members2 = new Set();

// add 메소드
members2.add('영훈'); // Set(1) {"영훈"}
members2.add('윤수'); // Set(2) {"영훈", "윤수"}
members2.add('영훈'); // Set(2) {"영훈", "윤수"}
members2.add('영훈'); // Set(2) {"영훈", "윤수"}
members2.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members2.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members2.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members2.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members2.add('동욱'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members2.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members2.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}


// Set을 생성할 때 아규먼트로 배열을 전달할수도 있다.
// 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용하기도 한다.

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}