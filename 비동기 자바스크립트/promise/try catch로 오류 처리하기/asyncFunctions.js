export async function printEmployees() {
  try {
    const response = await fetch('https://learn.codeit.kr/api/employees');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error!');
    return
  } finally {
    console.log('Finished');
  }
}

// fetch는 네트워크가 불안정하거나 서버측에서 오류가 나거나
// 잘못된 URL에 리퀘스트를 보내거나 하는 등 다양한 이유로 리퀘스트가 실패할 수 있다.