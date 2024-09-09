// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

// event.preventDefault
link.addEventListener('click', function (e) {
  e.preventDefault();
  alert('지금은 이동할 수 없습니다.');
})

input.addEventListener('keydown', function(e) {
  if (!checkbox.checked) {
    e.preventDefault();
    alert('체크박스를 먼저 체크해 주세요.');
  }
});

text.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert('마우스 우측 버튼 사용 불가');
});