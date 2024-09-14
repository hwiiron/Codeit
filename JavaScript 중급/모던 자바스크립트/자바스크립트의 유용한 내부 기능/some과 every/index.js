// some과 every
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);

// every: 모든 요소가 조건을 만족하는지
// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el) => el > 5);

console.log('some', someReturn);
console.log('every', everyReturn);


// 배열 안에서 어떤 조건을 만족하는 요소를 추려낼때는 filter와 find 메소드를 사용하고
// 배열 내에 요소들이 단순 조건을 만족하는지만 확인하려면 some, every 메소드를 사용하는 것이 좋다.