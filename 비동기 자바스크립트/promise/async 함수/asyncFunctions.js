export async function printEmployess () {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  console.log(data);
}

// 화살표 함수로 async 사용법
// const printEmployessArrow = async () => {
//   const response = await fetch('https://learn.codeit.kr/api/employees');
//   const data = await response.json();
//   console.log(data);
// }