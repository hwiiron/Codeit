// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e) {
  console.log('content Event');
  console.log(e.currentTarget);
});

title.addEventListener('click', function(e) {
  console.log('title Event');
  console.log(e.currentTarget);
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  console.log(e.currentTarget);
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
    console.log(e.currentTarget);
		// e.stopPropagation();
  });
}