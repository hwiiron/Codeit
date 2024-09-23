// 아이콘(눈) 버튼 클릭 시 비밀번호 보이기 / 숨기기
const eye = document.querySelector('.eye');
const password = document.querySelector('#password-input');

function passwordShow() {
  if (password.getAttribute('type') == 'password') {
    eye.classList.add('show');
    password.setAttribute('type', 'text');
  } else {
    eye.classList.remove('show');
    password.setAttribute('type', 'password');
  }
}



// 이메일 형식 체크
const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
const email = document.querySelector('#email-input');
const msg = document.querySelector('.emailMsg');
const errMsg = document.querySelector('.emailErrMsg');

function emailCheck() {
  if (email.value == '') { // 입력 값이 없을 때
    msg.classList.add('show');
    errMsg.classList.remove('show');
  } else if (!pattern.test(email.value)) { // 입력 값은 있으나 이메일 형식에 맞지 않을 때
    errMsg.classList.add('show');
    msg.classList.remove('show');
  } else {
    msg.classList.remove('show');
    errMsg.classList.remove('show');
  }
}



// 비밀번호 체크
const passwordMsg = document.querySelector('.passwordMsg');
const passwordLength = document.querySelector('.passwordLength');

function passwordCheck() {
  if (password.value == '') {
    passwordMsg.classList.add('show');
    passwordLength.classList.remove('show');
  } else if (password.value.length < 8) {
    passwordLength.classList.add('show');
    passwordMsg.classList.remove('show');
  } else {
    passwordLength.classList.remove('show');
    passwordMsg.classList.remove('show');
  }
}



// 이메일, 비밀번호 입력 시 로그인 버튼 활성화 / 비활성화
const loginBtn = document.querySelector('.loginBtn');

function loginBtnActive () {
  if (pattern.test(email.value) && password.value.length >= 8) {
    loginBtn.classList.add('active');
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove('active');
    loginBtn.disabled = true;
  }
}



// 이메일, 비밀번호 입력 후 엔터키 누르면 로그인 버튼 클릭
function loginEnter(e) {
  if (e.keyCode == 13 && pattern.test(email.value) && password.value.length >= 8) {
    loginBtn.click();
  }
}



// 닉네임 체크
const nickName = document.querySelector('#nickname-input');
const nicknameMsg = document.querySelector('.nicknameMsg');

function nickNameCheck() {
  if (nickName.value == '') {
    nicknameMsg.classList.add('show');
  } else {
    nicknameMsg.classList.remove('show');
  }
}



// 비밀번호 확인
const passwordRepeat = document.querySelector('#passwordCheck-input');
const passwordCheckMsg = document.querySelector('.passwordCheckMsg');

function passwordConfirm() {
  if (password.value !== passwordRepeat.value) {
    passwordCheckMsg.classList.add('show');
  } else {
    passwordCheckMsg.classList.remove('show');
  }
}



// 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 시 로그인 버튼 활성화 / 비활성화
const signupBtn = document.querySelector('.signupBtn');

function signupBtnActive () {
  if (pattern.test(email.value) && nickName.value !== '' && password.value.length >= 8 && password.value == passwordRepeat.value) {
    signupBtn.classList.add('active');
    signupBtn.disabled = false;
  } else {
    signupBtn.classList.remove('active');
    signupBtn.disabled = true;
  }
}



// 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 후 엔터키 누르면 로그인 버튼 클릭
function signupEnter(e) {
  if (e.keyCode == 13 && pattern.test(email.value) && nickName.value !== '' && password.value.length >= 8 && password.value == passwordRepeat.value) {
    signupBtn.click();
  }
}



export { eye, email, password, nickName, passwordRepeat, signupBtn, passwordShow, emailCheck, passwordCheck, loginBtnActive, loginEnter, nickNameCheck, passwordConfirm, signupBtnActive, signupEnter }