function getArray() {
  return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray();

console.log(el1); // 컴퓨터
console.log(el2); // 냉장고
console.log(el3); // 세탁기



// 함수에 배열 사용 예시
// function printWinners(...arg) {
//   const [macbook, ipad, airpods, ...coupon] = arg;

//   console.log(`이벤트 결과를 알려드립니다!`);
//   console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
//   console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
//   console.log(`에어팟 주인공은 '${airpods}님 입니다.`);
//   console.log(`코드잇 3개월 수강권 주인공은`);

//   for (let user of coupon) {
//     console.log(`'${user}님'`);
//   }

//   console.log(`이상 총 ${coupon.length}명 입니다.`);
// }

// printWinners('꿈', '달', '밤', '은주', '휘철', '꿈달밤은주휘철');


function printWinners([macbook, ipad, airpods, ...coupon]) {
  console.log(`이벤트 결과를 알려드립니다!`);
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
  console.log(`에어팟 주인공은 '${airpods}님 입니다.`);
  console.log(`코드잇 3개월 수강권 주인공은`);

  for (let user of coupon) {
    console.log(`'${user}님'`);
  }

  console.log(`이상 총 ${coupon.length}명 입니다.`);
}

let ranks = ['꿈', '달', '밤', '은주', '휘철', '꿈달밤은주휘철'];
printWinners(ranks);



// 함수에 객체 사용 예시
function getObject() {
  return {
    name: '신휘철',
    birth: 1998,
    job: '개발자',
  }
}

const {name: brand, birth, job} = getObject();

console.log(brand);
console.log(birth);
console.log(job);


// 더 유용하게 활용되는 예시
const macbook2 = {
  title: '맥북 프로',
  price: 3690000,
  color: 'silver',
  memory: '16GB',
  storage: '1TB SSD',
  display: 'Retina',
}

// 예시 1
function printSummary (object) {
  console.log(`선택한 상품은 '${object.title}'입니다.`);
  console.log(`색상은 ${object.color}이며,`);
  console.log(`가격은 ${object.price}원 입니다.`);
}

// 예시 2
function printSummary (object) {
  const {title, color, price} = object;
  
  console.log(`선택한 상품은 '${title}'입니다.`);
  console.log(`색상은 ${color}이며,`);
  console.log(`가격은 ${price}원 입니다.`);
}

// 예시 3 - 가장 효과적
function printSummary ({title, color, price}) {
  console.log(`선택한 상품은 '${title}'입니다.`);
  console.log(`색상은 ${color}이며,`);
  console.log(`가격은 ${price}원 입니다.`);
}

printSummary(macbook2);



const btn = document.querySelector('#btn');

// 예시 1
btn.addEventListener('click', (event) => {
  event.target.classList.toggle('checked');
})

// 예시 2
btn.addEventListener('click', ({target}) => {
  target.classList.toggle('checked');
})

// 예시 3
btn.addEventListener('click', ({target: {classList}}) => {
  classList.toggle('checked');
})

// 예시 4
btn.addEventListener('click', ({target}) => {
  const {classList} = target;
  classList.toggle('checked');
})

// 중첩 객체 구조 분해(Nested Object Destructuring)도 나중에 공부해보기.