const fields = document.querySelectorAll('[data-field]');
console.log(fields);

const task = {
  title: '코드 에디터 개발',
  manager: 'Cascading Raccoon Lee',
  status: '',
};

for (let tag of fields) {
  const field = tag.dataset.field;
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
  const status = btn.dataset.status;
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;
  }
}