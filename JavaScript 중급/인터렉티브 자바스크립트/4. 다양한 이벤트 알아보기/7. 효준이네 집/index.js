// showTitle 함수를 완성해 주세요
function showTitle(e) {
	// 여기에 코드를 작성하세요
  if (e.target.hasAttribute('data-title')) {
    let span = document.createElement('span');
    span.setAttribute('class', 'title');
    span.textContent = e.target.dataset.title;
    e.target.append(span);
  }

  console.log(e.target.dataset.title);
}

// removeTitle 함수를 완성해 주세요
function removeTitle() {
	// 여기에 코드를 작성하세요
    let span = document.querySelector('.title');
    span.remove();
}

let map = document.querySelector('.map');

// '대상'과 '타입'을 수정해 주세요
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);