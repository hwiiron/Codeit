// filter와 find

// filter와 find도 forEach와 map 메소드처럼 반복적인 동작을 하는 메소드이다.
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'iPad', brand: 'Apple'},
  {name: 'GalaxyWatch', brand: 'Samsung'},
  {name: 'iMac', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'galaxyBook', brand: 'Samsung'},
];

const apples = devices.filter((el) => el.brand === "Apple");

console.log(apples);
// filter 메소드는 항상 리턴 값이 배열이다.


const myLaptop = devices.filter((el) => el.name === "Gram");

console.log(myLaptop);
console.log(...myLaptop); // 배열을 벗겨낼 수 있다.
// 리턴 값이 하나여도 하나를 배열로 리턴해준다.


// filter와 find의 사용법은 똑같고 약간의 차이가 있다.
// filter는 배열, find는 값을 리턴한다.
// find는 index가 가장 앞에 있는 하나만 리턴한다.
const myMac = devices.find((el) => el.brand === "Apple");

console.log(myMac);