import { eye, email, password, passwordShow, emailCheck, passwordCheck, loginBtnActive, loginEnter } from './input.js';

// 아이콘(눈) 버튼 클릭 시 비밀번호 보이기 / 숨기기
eye.addEventListener('click', passwordShow);


// 이메일 형식 체크
email.addEventListener('focusout', emailCheck);
email.addEventListener('input', emailCheck);


// 비밀번호 체크
password.addEventListener('focusout', passwordCheck);
password.addEventListener('input', passwordCheck);


// 이메일, 비밀번호 입력 시 로그인 버튼 활성화 / 비활성화
document.addEventListener('input', loginBtnActive);


// 이메일, 비밀번호 입력 후 엔터키 누르면 로그인 버튼 클릭
document.addEventListener('keydown', loginEnter);