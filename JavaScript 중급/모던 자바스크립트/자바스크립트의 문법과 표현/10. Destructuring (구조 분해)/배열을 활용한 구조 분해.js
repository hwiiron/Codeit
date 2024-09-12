// 배열을 활용한 구조 분해 (Destructuring)

const rank = ['효준', '유나', '민환', '재하'];

// 배열의 index로 접근하여 변수에 할당
// const macbook = rank[0]; // 효준
// const ipad = rank[1]; // 유나
// const airpods = rank[2]; // 민환
// const coupon = rank[3]; // 재하


// Destructuring 문법
// 할당 연산자 왼편의 변수 이름들이 배열의 형태로 선언되고, rank 배열을 왼쪽에 할당
// 즉, 우측에 배열의 형태의 변수 이름들에 rank 요소들이 순서대로 할당
const [macbook, ipad, airpods, coupon] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);



// 선언된 변수의 갯수와 배열의 길이가 다른 경우 - 할당하는 배열의 길이가 더 긴 경우
const rank2 = ['효준', '유나', '민환', '재하', '규식'];

const [macbook2, ipad2, airpods2, ...coupon2] = rank2;

console.log(macbook2);
console.log(ipad2);
console.log(airpods2);
console.log(coupon2);



// 선언된 변수의 갯수와 배열의 길이가 다른 경우 - 할당하는 배열의 길이가 더 짧은 경우
const rank3 = ['효준', '유나', '민환'];

const [macbook3, ipad3, airpods3, coupon3="휘철"] = rank3;

console.log(macbook3);
console.log(ipad3);
console.log(airpods3);
console.log(coupon3); // undefined
// undefined를 반환하거나 기본값을 넣으면 undefined 대신 기본값이 반환된다



let macbook4 = '휘철';
let ipad4 = '은주';

// 새로운 변수를 만들어서 값을 교환
// let temp = macbook4;
// macbook4 = ipad4;
// ipad4 = temp;

// Destructuring 문법 사용하여 값을 교환
[macbook4, ipad4] = [ipad4, macbook4];

console.log('MacBook 당첨자:', macbook4);
console.log('iPad 당첨자:', ipad4);