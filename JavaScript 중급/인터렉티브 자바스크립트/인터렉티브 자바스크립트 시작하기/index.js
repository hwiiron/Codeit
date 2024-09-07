// id로 태그 선택하기
// const myTag = document.getElementById('myNumber');
const myTag = document.getElementById('btns');
console.log(myTag); // <div id="myNumber">0</div>

// getElementById() 사용 시 해당하는 태그만 나타나는 것이 아닌 해당 태그 내부 요소까지 나타남
// 존재하지 않는 태그 id를 선택 시 undefined가 아닌 null이 리턴


console.log('------------------------------');
console.log('------------------------------');


// class로 태그 선택하기
const myTags = document.getElementsByClassName('color-btn'); // 같은 class명을 가진 여러 요소 선택 가능
console.log(myTags); // HTMLCollection [button.color-btn.red, ... , button.color-btn.black]
console.log(myTags[0]); // button.color-btn.red
console.log(myTags.length); // 8

for (let tag of myTags) {
  console.log(tag); // button.color-btn.red, ... , button.color-btn.black
}


const myTagRed = document.getElementsByClassName('red');
console.log(myTagRed); // HTMLCollection [button.color-btn.red]
// red class를 가진 태그가 하나여도 유사 배열에 담기므로 콘솔에 출력 시 인덱스를 붙여줘야 확인 가능함


const test = document.getElementsByClassName('test');
console.log(test === null); // false
console.log(test.length);
// 존재하지 않는 태그 class를 선택 시 getElementById()와 다르게 빈 HTML Collection이 출력



// 유사 배열 (Array-Like Object)
// 배열과 모양은 같지만, 완벽히 배열은 아닌 이런 형태를 유사 배열이라고 부름.
// 1. 숫자 형태의 indexing이 가능하다.
// 2. length 프로퍼티가 있다.
// 3. 배열의 기본 메소드를 사용할 수 없다. (.push(), .splice() 등)
// 4. Array.isArray(유사배열)은 false다. - Array 객체의 isArray 메소드는 파라미터로 전달한 값이 배열이 아닌지를 평가


console.log('------------------------------');
console.log('------------------------------');


// getElementByTagName
const btns = document.getElementsByTagName('button');
console.log(btns); // HTML 파일의 button태그 전체가 HTML Collection 유사 배열안에 담긴다.

const allTags = document.getElementsByTagName('*'); // 모든 태그 선택도 가능


console.log('------------------------------');
console.log('------------------------------');


// css 선택자로 태그를 선택하기
const myTag2 = document.querySelector('#myNumber'); // document.getElementById('myNumber')와 동일한 값 출력
console.log(myTag2); // <div id="myNumber">0</div>

const myTag3 = document.querySelector('.color-btn'); // color-btn class를 가진 태그 중 제일 첫 번째 태그만 출력
console.log(myTag3); // <button class="color-btn red" data-color="#FF0000"></button>

const myTags2 = document.querySelectorAll('.color-btn'); // querySelectorAll은 document.getElementClassName('color-btn')과 동일한 유사 배열 출력
console.log(myTags2); // NodeList [button.color-btn.red, ... , button.color-btn.black]


console.log('------------------------------');
console.log('------------------------------');


// 이벤트(Event)와 버튼 클릭
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링(Event Handling)
btn.onclick = function () { // 이벤트 핸들러(Event Handler)
  console.log('Hello');
}


console.log('------------------------------');
console.log('------------------------------');


// 자바스크립트 태그 선택하기
// document.getElementById('id') - id에 해당하는 태그 하나
// document.getElementsByClassName('class') - class에 해당하는 태그 모음 (HTML Collection)
// document.getElementsByTagName('tag') - tag에 해당하는 태그 모음 (HTML Collection)
// document.querySelector('css') - css 선택자에 해당하는 태그 중 가장 첫 번째 태그 하나
// document.querySelectorAll('css') - css 선택자에 해당하는 태그 모음 (NodeList)


// 이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러
// 이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
// ex) 버튼 클릭, 스크롤, 키보드 입력, ...
// 이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일
// 이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현하는 코드. 이벤트 리스너(Event Listener)라고도 부른다.