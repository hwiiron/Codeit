// 아이콘(눈) 버튼 클릭 시 비밀번호 보이기 / 숨기기
const visibilityToggleButton = document.querySelector('.eye');
const passwordInput = document.querySelector('#password-input');

function passwordShow() {
  const isPasswordHidden = passwordInput.getAttribute('type') === 'password';
  visibilityToggleButton.classList.toggle('show', isPasswordHidden);  // 조건에 따라 class 토글
  passwordInput.setAttribute('type', isPasswordHidden ? 'text' : 'password'); 
}



// 이메일 형식 체크
const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
// @을 기준으로 앞 구간이 대, 소문자 or 숫자 조합으로 이루어져 있는지 체크
// @을 기준으로 뒷 구간이 대, 소문자 or 숫자 조합으로 이루어져 있는지 체크
// @을 기준으로 뒷 구간에서 .뒷 구간이 대, 소문자 or 숫자 조합으로 이루어져 있는지

const emailInput = document.querySelector('#email-input');
const msg = document.querySelector('.emailMsg');
const errMsg = document.querySelector('.emailErrMsg');

function emailCheck() {
  // 모든 메시지 숨김
  msg.classList.remove('show');
  errMsg.classList.remove('show');

  if (emailInput.value == '') { // 입력 값이 없을 때
    msg.classList.add('show');
  } else if (!pattern.test(emailInput.value)) { // 입력 값은 있으나 이메일 형식에 맞지 않을 때
    errMsg.classList.add('show');
  }
}



// 비밀번호 체크
const passwordMsg = document.querySelector('.passwordMsg');
const passwordLength = document.querySelector('.passwordLength');

function passwordCheck() {
  passwordLength.classList.remove('show');
  passwordMsg.classList.remove('show');

  if (passwordInput.value == '') {
    passwordMsg.classList.add('show');
  } else if (passwordInput.value.length < 8) {
    passwordLength.classList.add('show');
  }
}



// 이메일, 비밀번호 입력 시 로그인 버튼 활성화 / 비활성화
const loginBtn = document.querySelector('.loginBtn');

function activateLoginBtnState () {
  const LoginFormValid = pattern.test(emailInput.value) && passwordInput.value.length >= 8;
  loginBtn.classList.toggle('activate', LoginFormValid);
  loginBtn.disabled = !LoginFormValid;
}



// 이메일, 비밀번호 입력 후 엔터키 누르면 로그인 버튼 클릭
function loginOnEnter(e) {
  if (e.keyCode == 13 && pattern.test(emailInput.value) && passwordInput.value.length >= 8) {
    loginBtn.click();
  }
}



// 닉네임 체크
const nickNameInput = document.querySelector('#nickname-input');
const nicknameMsg = document.querySelector('.nicknameMsg');

function nickNameCheck() {
  const isNickNameEmpty = nickNameInput.value == '';
  nicknameMsg.classList.toggle('show', isNickNameEmpty);
}



// 비밀번호 확인
const passwordRepeat = document.querySelector('#passwordCheck-input');
const passwordCheckMsg = document.querySelector('.passwordCheckMsg');

function passwordConfirm() {
  const passwordMatching = passwordInput.value !== passwordRepeat.value;
  passwordCheckMsg.classList.toggle('show', passwordMatching);
}



// 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 시 로그인 버튼 활성화 / 비활성화
const signupBtn = document.querySelector('.signupBtn');

function activateSignupBtnState () {
  const signupFormValid = pattern.test(emailInput.value) &&
                          nickNameInput.value !== '' &&
                          passwordInput.value.length >= 8 &&
                          passwordInput.value == passwordRepeat.value;

  signupBtn.classList.toggle('activate', signupFormValid);
  signupBtn.disabled = !signupFormValid;
}



// 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 후 엔터키 누르면 로그인 버튼 클릭
function signupOnEnter(e) {
  if (e.keyCode == 13 && pattern.test(emailInput.value) && nickNameInput.value !== '' && passwordInput.value.length >= 8 && passwordInput.value == passwordRepeat.value) {
    signupBtn.click();
  }
}



export { visibilityToggleButton, emailInput, passwordInput, nickNameInput, passwordRepeat, signupBtn, passwordShow, emailCheck, passwordCheck, activateLoginBtnState, loginOnEnter, nickNameCheck, passwordConfirm, activateSignupBtnState, signupOnEnter }