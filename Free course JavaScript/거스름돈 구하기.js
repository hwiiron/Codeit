// 거스름돈 구하기

function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost;

  let fiftyCount = Math.floor(change / 50000);
  change = change - fiftyCount * 50000;

  let tenCount = Math.floor(change / 10000);
  change = change - tenCount * 10000;

  let fiveCount =Math.floor(change / 5000);
  change = change - fiveCount * 5000;

  let oneCount = Math.floor(change / 1000);
  change = change - oneCount * 1000;

  console.log(`50000원 지폐: ${fiftyCount}장`)
  console.log(`10000원 지폐: ${tenCount}장`)
  console.log(`5000원 지폐: ${fiveCount}장`)
  console.log(`1000원 지폐: ${oneCount}장`)
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);