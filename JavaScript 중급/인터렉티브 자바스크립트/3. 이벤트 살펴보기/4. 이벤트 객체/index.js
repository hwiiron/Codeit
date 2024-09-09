// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

// myInput.addEventListener('keydown', function () {
//   console.log('keyboardEvent');
// });

// myBtn.addEventListener('click', function () {
//   console.log('MouseEvent');
// });

function printEvent () {
  console.log(event);
  event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);