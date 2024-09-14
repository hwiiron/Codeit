// reduce

// reduce 메소드는 누적값을 계산할 때 활용하는 메소드이다.

const numbers = [1, 2, 3, 4];

// numbers.reduce((acc, el, i, arr) => {
//   return nextAccValue;
// }, initialAccValue);

// 첫 번째 파라미터는 Accumulator(누산기)
// 두 번째 파라미터는 배열의 요소가 전달되고
// 세 번째는 요소의 index가 전달,
// 네 번째는 메소드를 호출한 배열이 전달된다.

// 첫 번째 파라미터인 acc = Accumulator(누산기)는
// 매번 콜백함수가 반복해서 동작할 때 직전에 동작한 콜백함수가 리턴한 값을 전달받는 파라미터이다.

// reduce 메소드에 활용되는 콜백함수는 다음 콜백함수에 acc로 전달할 값을 리턴한다.
// 매 반복 때마다 콜백함수의 리턴 값을 다음 콜백함수의 acc로 전달해주면서
// 결국에는 마지막에 실행되는 콜백함수의 리턴 값이 reduce 메소드의 최종 리턴 값이 되는 것이다.

// 위 설명대로면 가장 처음 실행되는 콜백함수는 acc로 전달받을 값이 없으므로
// 첫 번째 콜백함수가 동작할 때 acc의 값을 reduce 메소드의 두 번째 아규먼트로 전달해준다.

const sumAll = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소를 콜백함수가 동작 중입니다.`);
  console.log('acc:', acc);
  console.log('el:', el);
  console.log(`-------------------`);

  return acc + el;
}, 0);

console.log('sumAll:', sumAll);

