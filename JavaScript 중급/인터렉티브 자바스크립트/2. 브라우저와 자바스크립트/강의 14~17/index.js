// // HTML 속성 (HTML attribute)
// const tomorrow = document.querySelector('#tomorrow');
// const item = tomorrow.firstElementChild;
// const link = item.firstElementChild;


// // element.getAttribute('속성') : 속성에 접근하기
// console.log(tomorrow.getAttribute('href'));
// console.log(item.getAttribute('class'));


// // element.setAttribute('속성', '값') : 속성 추가(수정)하기
// tomorrow.setAttribute('class', 'list'); // 추가
// link.setAttribute('href', 'https://www.codeit.kr'); // 수정


// // element.removeAttribute('속성') : 속성 제거하기
// tomorrow.removeAttribute('href');
// tomorrow.removeAttribute('class');



// // 스타일 다루기
// const today = document.querySelector('#today');
// const tomorrow2 = document.querySelector('#tomorrow');


// element.classList : add, remove, toggle
const item2 = tomorrow.children[2];
item2.classList.add('done', 'done2', 'done3'); // 쉼표로 구분하여 여러 개 추가 가능
item2.classList.remove('done2', 'done3'); // 쉼표로 구분하여 여러 개 삭제 가능
item2.classList.toggle('done'); // toggle 메서드는 클래스 하나만 다룸
item2.classList.toggle('done', false);
// true는 add의 역할만, false는 remove의 역할만



// element.className
today.children[1].className = 'done';


// style 프로퍼티 (하이픈 제거하고 카멜표기법)
// today.children[0].style.textDecoration = 'line-through';
// today.children[0].style.backgroundColor = '#DDD';