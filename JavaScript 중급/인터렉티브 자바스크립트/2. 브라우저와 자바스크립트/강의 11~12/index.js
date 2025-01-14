// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름');
const first = document.createElement('li');

// 2. 요소 노드 꾸미기 : textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first); // 앞에 추가

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last); // 뒤에 추가

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev); // tomorrow element 이전 추가

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next); // tomorrow element 다음 추가


// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow2 = document.querySelector('#tomorrow');

// 노드 삭제하기 : Node.remove()
// tomorrow.remove();
// today.children[2].remove();


// 노드 이동하기: prepend, append, before, after
// today.append(tomorrow.children[1]);

tomorrow.children[1].after(today.children[1]);