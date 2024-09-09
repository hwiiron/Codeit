// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

function event1 () {
  console.log('event1');
}

function event2 () {
  console.log('event2');
}

// element.addEventListener(event, handler)
btn.addEventListener('click', event1); // handler에 소괄호 제거
btn.addEventListener('click', event2);

// element.removeEventListener(event, handler)
btn.removeEventListener('click', event2);

// 이벤트 핸들러를 삭제해야 할 필요가 있다면 반드시 이벤트를 등록할 때 외부에 함수를 만들어서 해당 함수의 이름으로 핸들러를 전달해야 함