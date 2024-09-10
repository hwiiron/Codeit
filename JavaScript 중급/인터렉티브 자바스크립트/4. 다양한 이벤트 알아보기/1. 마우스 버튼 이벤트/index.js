let timer = 0;

function printEventType(e) {
	const EVENT_DURATION = 800;
  const eventTime = new Date();

	if (timer === 0) {
    timer = new Date();
	}

	if (eventTime - timer > EVENT_DURATION) {
    console.log('--------------------------');
	}
  
  if (e.target.id !== 'mouse') {
    e.preventDefault();
  }
  
  const btns = document.querySelector(`#btns`);
  const btn = document.querySelector(`#btn${e.button}`);
  btns.classList.add(`clicked-${e.button}`);
  btn.textContent = e.button;
  console.log(`${e.type} 이벤트가 발생했습니다.`);
  
	if (e.type === 'dblclick') {
		btns.className = 'dblclick';
  }
  
  function styleInit() {
    btns.className = '';
    btn.textContent = '';
  }
  
  setTimeout(styleInit, EVENT_DURATION);

  timer = eventTime;
}

document.addEventListener('click', printEventType);
document.addEventListener('contextmenu', printEventType);
document.addEventListener('dblclick', printEventType);
document.addEventListener('mouseup', printEventType);
document.addEventListener('mousedown', printEventType);