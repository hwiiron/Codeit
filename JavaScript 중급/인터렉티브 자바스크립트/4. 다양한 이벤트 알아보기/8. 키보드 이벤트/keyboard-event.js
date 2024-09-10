const myInput = document.querySelector('#my-input');
const key = document.querySelector('#key');
const code = document.querySelector('#code');

function onkeyEvent(e) {
  const eventBtn = document.querySelector(`#${e.type}`);
  eventBtn.classList.add('check');

  const el = document.querySelector(`#${e.code}`);
  el.classList.add('on');

  if (e.type === 'keyup') {
    el.classList.remove('on');
  } else if (e.type === 'keydown') {
    key.textContent = `key: ${e.key}`;
    code.textContent = `code: ${e.code}`;
  }

  setTimeout(function() {eventBtn.className = 'event'}, 300);
}

myInput.addEventListener('keydown', onkeyEvent);
myInput.addEventListener('keypress', onkeyEvent);
myInput.addEventListener('keyup', onkeyEvent);