// try catch문

console.log('에러 전');

const codeit = '코드잇';
console.log(codeit);

// 상수에 재할당하여 에러 발생
// codeit = 'codeit';

const language = 'JavaScript';
console.log(language);

console.log('에러 후');



// try catch문
// try문에서 에러가 발생하면 catch문의 코드가 실행된다.
try {
  // 코드
} catch(error) {
  // 에러가 발생했을 때 동작할 코드
}



// 예시
try {
  console.log('에러 전');

  const codeit = '코드잇';
  console.log(codeit);

  // 상수에 재할당하여 에러 발생
  codeit = 'codeit';
  // 에러가 발생하여 이후 코드 실행하지 않고 catch문 코드 실행

  const language = 'JavaScript';
  console.log(language);

} catch (err) { // catch 파라미터명은 자유
  console.log('에러 후');
  console.log(err);
  console.error(err); // error 메소드 사용 시 진짜 에러 메세지처럼 콘솔에서 확인 가능
  console.log(err.name);
  console.log(err.message);
}



// try catch문 활용하기
// function printMembers(members) {
//   for (let member of members) {
//     console.log(member);
//   }
// }

function printMembers(members) {
  try {
    for (let member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해 주세요.`);
  }
}

const teamA = ['상헤', '혜진', '지혜', '혜선'];
printMembers(teamA);

const codeit2 = {name: 'codeit'};
printMembers(codeit2);

const teamB = ['영훈', '재훈', '종훈', '정훈'];
printMembers(teamB);

// try, catch문은 실행 가능한 코드 내에서 발생하는 에러를 처리하는데 사용된다.
// SyntaxError는 코드가 실행되기 전에 발생하므로 try, catch로 처리되지 않는다.
// 실행 중 발생한 에러를 예외 처리(Exception Handling)라고 한다.