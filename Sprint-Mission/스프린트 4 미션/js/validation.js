const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;

const emailInput = document.querySelector("#email-input");
const msg = document.querySelector(".emailMessage");
const errMsg = document.querySelector(".emailErrorMessage");

const passwordMessage = document.querySelector(".passwordMessage");
const passwordLengthError = document.querySelector(".passwordLengthError");

const passwordCheckInput = document.querySelector("#passwordCheck-input");
const passwordMismatchError = document.querySelector(".passwordMismatchError");

const loginBtn = document.querySelector(".loginBtn");

const nickNameInput = document.querySelector("#nickname-input");
const nickNameMessage = document.querySelector(".nickNameMessage");

const passwordInput = document.querySelector("#password-input");
const passwordToggleBtn = document.querySelector(".passwordToggleBtn");

const passwordCheckToggleBtn = document.querySelector(
  ".passwordCheckToggleBtn"
);

const signupBtn = document.querySelector(".signupBtn");

// 이메일 형식 체크
function checkEmail() {
  // 이메일 input에 입력 값이 없는 경우
  const isEmailEmpty = emailInput.value == "";
  emailInput.classList.toggle("error", isEmailEmpty);
  msg.classList.toggle("show", isEmailEmpty);

  // 이메일 input에 입력 값은 있지만 이메일 형식에 맞지 않는 경우
  const isValidEmailInput = !isEmailEmpty && !pattern.test(emailInput.value);
  errMsg.classList.toggle("show", isValidEmailInput);
}

// 비밀번호 체크
function checkPassword() {
  // 비밀번호 input에 입력 값이 없는 경우
  const isPasswordEmpty = passwordInput.value == "";
  passwordInput.classList.toggle("error", isPasswordEmpty);
  passwordMessage.classList.toggle("show", isPasswordEmpty);

  // 비밀번호 input에 입력 값은 있지만 8글자 미만인 경우
  const isPasswordLengthValid =
    passwordInput.value.length < 8 && !isPasswordEmpty;
  passwordInput.classList.toggle("error", isPasswordLengthValid);
  passwordLengthError.classList.toggle("show", isPasswordLengthValid);
}

// 비밀번호 확인
function confirmPassword() {
  const isPasswordMismatch = passwordInput.value !== passwordCheckInput.value;
  passwordCheckInput.classList.toggle("error", isPasswordMismatch);
  passwordMismatchError.classList.toggle("show", isPasswordMismatch);
}

// 이메일, 비밀번호 입력 시 로그인 버튼 활성화 / 비활성화
function activateLoginBtnState() {
  const isLoginFormValid =
    pattern.test(emailInput.value) && passwordInput.value.length >= 8;
  loginBtn.classList.toggle("activate", isLoginFormValid);
  loginBtn.disabled = !isLoginFormValid;
}

// 이메일, 비밀번호 입력 후 엔터키 누르면 로그인 버튼 클릭
function loginOnEnter(e) {
  if (
    e.keyCode == 13 &&
    pattern.test(emailInput.value) &&
    passwordInput.value.length >= 8
  ) {
    loginBtn.click();
  }
}

// 닉네임 체크
function nickNameCheck() {
  const isNickNameEmpty = nickNameInput.value == "";
  nickNameInput.classList.toggle("error", isNickNameEmpty);
  nickNameMessage.classList.toggle("show", isNickNameEmpty);
}

// 비밀번호 - 아이콘(눈) 버튼 클릭 시 비밀번호 보이기 / 숨기기
function passwordToggleVisibility() {
  const isPasswordHidden = passwordInput.getAttribute("type") === "password";
  passwordToggleBtn.classList.toggle("show", isPasswordHidden);
  passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");
}

// 비밀번호 확인 - 아이콘(눈) 버튼 클릭 시 비밀번호 보이기 / 숨기기
function passwordCheckToggleVisibility() {
  const isPasswordHidden =
    passwordCheckInput.getAttribute("type") === "password";
  passwordCheckToggleBtn.classList.toggle("show", isPasswordHidden);
  passwordCheckInput.setAttribute(
    "type",
    isPasswordHidden ? "text" : "password"
  );
}

// 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 시 로그인 버튼 활성화 / 비활성화
function activateSignupBtnState() {
  const isSignupFormValid =
    pattern.test(emailInput.value) &&
    nickNameInput.value !== "" &&
    passwordInput.value.length >= 8 &&
    passwordInput.value == passwordCheckInput.value;

  signupBtn.classList.toggle("activate", isSignupFormValid);
  signupBtn.disabled = !isSignupFormValid;
}

// 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 후 엔터키 누르면 로그인 버튼 클릭
function signupOnEnter(e) {
  if (
    e.keyCode == 13 &&
    pattern.test(emailInput.value) &&
    nickNameInput.value !== "" &&
    passwordInput.value.length >= 8 &&
    passwordInput.value == passwordCheckInput.value
  ) {
    signupBtn.click();
  }
}

export {
  passwordToggleBtn,
  passwordCheckToggleBtn,
  emailInput,
  passwordInput,
  nickNameInput,
  passwordCheckInput,
  signupBtn,
  passwordToggleVisibility,
  passwordCheckToggleVisibility,
  checkEmail,
  checkPassword,
  activateLoginBtnState,
  loginOnEnter,
  nickNameCheck,
  confirmPassword,
  activateSignupBtnState,
  signupOnEnter,
};
