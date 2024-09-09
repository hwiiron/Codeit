// window : 전역객체 (Global Object)
console.log(window);
console.log(window.innerWidth); // 현재 브라우저 창 너비
console.log(window.innerHeight); // 현재 브라우저 창 높이

// 새탭열기
// window.open();

// 창 닫기
// window.close();


console.log('------------------------------');
console.log('------------------------------');


// DOM : 문서 객체 모델 (Document Object Model)
console.log(document);
console.log(typeof document); // object

// 객체 형태로 프로퍼티를 확인하려면
console.dir(document);


const title = document.querySelector('#title');
console.log(title); // <h1 id="title">DOM(Document Object Model</h1>
title.style.color = 'red';


console.log('------------------------------');
console.log('------------------------------');


// DOM 트리 여행하기
const myTag = document.querySelector('#content');

console.log(myTag);


// 형재 요소
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

console.log('------------------------------');

// 부모 요소 노드
console.log(myTag.parentElement);

console.log('------------------------------');

// 자식 요소 노드
console.log(myTag.children);
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);



// 요소 노드에 대한 이동 프로퍼티
// element.children - element의 자식 요소 모음 (HTML Collection)
// element.firstElementChild - element의 첫 번째 자식 요소 하나
// element.lastElementChild - element의 마지막 자식 요소 하나
// element.parentElement - element의 부모 요소 하나
// element.previousElementSibling - element의 이전, 좌측에 있는 요소 하나
// element.nextElementSibling - element의 다음, 우측에 있는 요소 하나


// 모든 노드에 대한 이동 프로퍼티
// node.childNodes - node의 자식 노드 모음 (NodeList)
// node.firstChild - node의 첫 번째 자식 노드 하나
// node.lastChild - node의 마지막 자식 노드 하나
// node.parentNode - node의 부모 요소 하나
// node.previousSibling - node의 이전, 좌측에 있는 요소 노드 하나
// node.nextSibling - node의 다음, 우측에 있는 노드 하나


console.log('------------------------------');
console.log('------------------------------');


// 요소 노드 주요 프로퍼티
const myTag4 = document.querySelector('#list-1');

// innerHTML
console.log(myTag4.innerHTML);
// myTag4.innerHTML = '<li>innerHTML</li>'
// myTag4.innerHTML += '<li>innerHTML</li>'

// outerHTML
console.log(myTag4.outerHTML);
// myTag4.outerHTML = '<ul><li>outerHTML</li></ul>'

// textContext
console.log(myTag4.textContent);
myTag4.textContent = 'new text!';


// element.innerHTML
// 요소 노드 내부의 HTML 코드를 문자열로 리턴해 줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)

// element.outerHTML
// 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)

// elemnt.textContent
// 요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옵니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)