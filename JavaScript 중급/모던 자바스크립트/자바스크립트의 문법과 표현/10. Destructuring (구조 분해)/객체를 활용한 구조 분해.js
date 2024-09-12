// 객체를 활용한 구조 분해 (Destructuring)

const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

// const title = macbook.title;
// const price = macbook.price;

// const {title, price} = macbook;
// 배열과 동일하게 값이 없으면 undefined, 기본값 설정 가능

const {title: product, ...rest} = macbook;
// 유효한 title 프로퍼티는 할당하고, 남은 프로퍼티는 하나의 객체로 모음.

// console.log(title);
console.log(product);
console.log(rest);


const propertyName = 'title';
const { [propertyName]: product2 } = macbook;

console.log(product2)