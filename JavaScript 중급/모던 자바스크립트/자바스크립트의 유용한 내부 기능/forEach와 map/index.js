// forEach와 map

// for...of문
const members = ['영훈', '윤수', '동욱', '태호'];

for (let member of members) {
  console.log(`${member}님이 입장하셨습니다.`);
}



// forEach문
members.forEach(function (member) {
  console.log(`${member}님이 입장하셨습니다.`);
})

members.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
})


// 두 번째 파라미더는 index도 활용할 수 있다. (두 번째 파라미더명은 자유)
// members.forEach((member, i) => {
members.forEach((member, index) => {
  console.log(`${index} ${member}님이 입장하셨습니다.`);
})


console.log('----------------------------------------');


const firstNames = ['영훈', '윤수', '동욱', '태호'];
const lastNames = ['강', '이', '손', '성'];

firstNames.forEach(function (firstName, i) {
  console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다.`);
})


console.log('----------------------------------------');


// 세 번째 파라미터는 반복중인 배열 자체를 출력 (파라미터명 자유)
const firstNames2 = ['영훈', '윤수', '동욱', '태호'];
const lastNames2 = ['강', '이', '손', '성'];

firstNames2.forEach(function (firstName, i, arr) {
  console.log(`${lastNames2[i]}${firstName}님이 입장하셨습니다.`);
  console.log(arr);
})


console.log('----------------------------------------');
console.log('----------------------------------------');


// map
// map메소드를 forEach 대신 사용해도 같은 결과값이 나오지만 
// map은 메소드의 호출 결과도 새로운 배열을 만들어서 리턴한다.
const firstNames3 = ['영훈', '윤수', '동욱', '태호'];
const lastNames3 = ['강', '이', '손', '성'];

firstNames3.map(function (firstName, i, arr) {
  console.log(`${lastNames3[i]}${firstName}님이 입장하셨습니다.`);
  console.log(arr);
})


console.log('----------------------------------------');


const firstNames4 = ['영훈', '윤수', '동욱', '태호'];
const lastNames4 = ['강', '이', '손', '성'];

const fullName = firstNames.map(function(firstName, i) {
  return lastNames[i] + firstName;
})
console.log(fullName);


// 화살표 문법으로 간결하게도 작성 가능
const fullName2 = firstNames.map((firstName, i) => lastNames[i] + firstName);

console.log(fullName2);



// forEach문은 리턴값이 없기 때문에 변수에 담았을 때 항상 undefined 값을 가지게 된다.

// 단순한 반복 작업일 경우에는 forEach를
// 반복 작업을 통해서 새로운 배열이 필요한 경우에는 map메소드를 활용한다.


console.log('----------------------------------------');
console.log('----------------------------------------');


// 콜백함수 내부에서 반복중인 배열을 편집할 수 있다.
const members2 = ['영훈', '윤수', '동욱', '태호'];

members2.forEach(function (member) {
  console.log(`${member}님이 입장하셨습니다.`);
  members2.push('코드잇');
});

console.log(members2);
// 배열을 편집해도 members2의 length대로 4번만 반복하고 코드잇이 4번 추가된 것을 확인할 수 있다.

// 동작 순서
// 1.	초기 배열 상태:
// members2 = ['영훈', '윤수', '동욱', '태호']

// 2.	첫 번째 루프 (영훈):
// console.log('영훈님이 입장하셨습니다.'); 출력
// 배열에 '코드잇'을 추가 → members2 = ['영훈', '윤수', '동욱', '태호', '코드잇']

// 3.	두 번째 루프 (윤수):
// console.log('윤수님이 입장하셨습니다.'); 출력
// 배열에 '코드잇'을 추가 → members2 = ['영훈', '윤수', '동욱', '태호', '코드잇', '코드잇']

// 4.	세 번째 루프 (동욱):
// console.log('동욱님이 입장하셨습니다.'); 출력
// 배열에 '코드잇'을 추가 → members2 = ['영훈', '윤수', '동욱', '태호', '코드잇', '코드잇', '코드잇']

// 5.	네 번째 루프 (태호):
// console.log('태호님이 입장하셨습니다.'); 출력
// 배열에 '코드잇'을 추가 → members2 = ['영훈', '윤수', '동욱', '태호', '코드잇', '코드잇', '코드잇', '코드잇']




// 반복중에 배열의 길이가 줄어드는 경우에는 반복횟수가 줄어든다
const members3 = ['영훈', '윤수', '동욱', '태호'];

members3.forEach(function (member) {
  console.log(`${member}님이 입장하셨습니다.`);
  members3.pop();
});

console.log(members3);
// 동작 순서
// 1.	초기 배열 상태:
// members3 = ['영훈', '윤수', '동욱', '태호']

// 2.	첫 번째 루프 (영훈):
// console.log('영훈님이 입장하셨습니다.'); 출력
// members3.pop()이 호출되어 배열의 마지막 요소 '태호'가 제거됩니다.
// 배열은 이제 ['영훈', '윤수', '동욱']이 됩니다.

// 3.	두 번째 루프 (윤수):
// console.log('윤수님이 입장하셨습니다.'); 출력
// 다시 members3.pop()이 호출되어 배열의 마지막 요소 '동욱'이 제거됩니다.
// 배열은 이제 ['영훈', '윤수']로 줄어듭니다.

// 4.	세 번째 루프 (동욱):
// 하지만 배열이 계속 줄어들어 forEach가 더 이상 순회하지 않습니다. 즉, 초기 배열의 길이인 4번이 아닌, 2번만 순회합니다.

// 5.	최종 배열 상태:
// 최종적으로 배열은 ['영훈', '윤수']가 됩니다.