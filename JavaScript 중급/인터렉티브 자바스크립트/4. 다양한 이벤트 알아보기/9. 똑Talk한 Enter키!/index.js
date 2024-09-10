const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
  // input.focus();
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성하세요
function enterSend(e) {
  if (e.code == 'Enter'){
    if (!e.shiftKey){
      e.preventDefault();
      if(confirm("메시지를 보내시겠습니까?")) {
        sendMyText();
      } else {
        input.value = '';
      }
    }
  }
}

input.addEventListener('keydown', enterSend);