// try catch문

console.log('에러 전');

const codeit = '코드잇';
console.log(codeit);

// 상수에 재할당하여 에러 발생
codeit = 'codeit';

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
  console.log(e.message);
}