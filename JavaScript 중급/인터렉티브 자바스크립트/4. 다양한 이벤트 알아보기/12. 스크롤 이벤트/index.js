let lastScrollY = 0;

function printEvent (e) {
  const STANDARD = 30;

  const nav = document.querySelector('#nav');
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > STANDARD) { // 스크롤 30px을 넘었을 때
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else {
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  }

  if (window.scrollY > lastScrollY) {
    nav.classList.add('lift-up');
  } else {
    nav.classList.remove('lift-up');
  }
}

window.addEventListener('scroll', printEvent);