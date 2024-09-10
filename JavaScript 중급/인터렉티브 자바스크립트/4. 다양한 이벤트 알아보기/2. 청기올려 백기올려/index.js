const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

// 1. flagUp 함수를 완성해 주세요
function flagUp(e) {
  // 여기에 코드를 작성해 주세요
  if (e.button === 0) {
    flagBlue.classList.add('up');
  } else {
    flagWhite.classList.add('up');
  }

  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭시 나타나는 메뉴창을 막아주세요 
document.addEventListener('contextmenu', function (event) {
  // 여기에 코드를 작성하세요
  event.preventDefault();
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);