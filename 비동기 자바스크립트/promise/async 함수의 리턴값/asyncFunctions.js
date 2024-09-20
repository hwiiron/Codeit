export async function getEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  return data;
}

// async 함수 안에서 await을 마주치면 뒤에 있는 fetch의 Promise가 Fulfilled가 될 때까지
// 함수 밖에 있는 코드를 실행하다 Fulfilled가 되면 다시 함수 내부로 돌아와 코드를 이어서 실행