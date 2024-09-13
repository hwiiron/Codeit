// finally문

try {
  // 실행할 코드
} catch (err) {
  // 에러가 발생했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}

// finally문은 try문에서 에러가 발생하지 않는다면 try문의 코드가 실행된 다음에,
// try문에서 에러가 발생한다면 catch문의 코드가 모두 실행된 다음에 실행할 코드를 finally문에 작성하면 된다.


function printMembers(...members) {
  for (const member of members) {
    console.log(member);
  }
}

try {
  printMembers('꿈', '달', '밤');
} catch (err) {
  alert('에러가 발생했습니다!');
  console.error(err);
} finally {
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}


// finally문에서 에러가 발생한 경우에는 다시 위에 있는 catch문으로 넘어가지 않는다.
// 만약 finally문에서도 에러 처리가 필요한 경우에는 아래처럼 try...catch문을 중첩해서 활용하는 방법이 있다.

try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발생했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finally문에서 에러가 발생했을 때 실행할 코드
}