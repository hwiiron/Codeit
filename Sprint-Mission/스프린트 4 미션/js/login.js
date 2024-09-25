import { passwordToggleBtn, emailInput, passwordInput, passwordShow, emailCheck, passwordCheck, activateLoginBtnState, loginOnEnter } from './input.js';

// 아이콘(눈) 버튼 클릭 시 비밀번호 보이기 / 숨기기
passwordToggleBtn.addEventListener('click', passwordShow);


// 이메일 형식 체크
emailInput.addEventListener('focusout', emailCheck);


// 비밀번호 체크
passwordInput.addEventListener('focusout', passwordCheck);
passwordInput.addEventListener('input', passwordCheck);


// 이메일, 비밀번호 입력 시 로그인 버튼 활성화 / 비활성화
document.addEventListener('input', activateLoginBtnState);


// 이메일, 비밀번호 입력 후 엔터키 누르면 로그인 버튼 클릭
document.addEventListener('keydown', loginOnEnter);