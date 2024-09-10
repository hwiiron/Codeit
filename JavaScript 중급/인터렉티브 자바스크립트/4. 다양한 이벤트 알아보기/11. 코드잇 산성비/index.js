const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!👏');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

function removeWord() {
  const word = document.querySelector(`[data-word="${input.value}"]`);

  if(word) {
    word.remove();

    input.value = '';

    checker();
  }
}
input.addEventListener('change', removeWord);

// 여기에 코드를 작성하세요
// function enterFunc () {
//   const words = document.querySelectorAll('.word');

//   for (let i = 0; i < words.length; i++) {
//     if (input.value == words[i].dataset.word) {
//       words[i].remove();
//       input.value = '';
//     }
//   }

//   checker();
// }

// input.addEventListener('keypress', enterFunc);