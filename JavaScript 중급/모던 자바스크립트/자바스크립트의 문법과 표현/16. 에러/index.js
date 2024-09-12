// 에러와 에러 객체

// ReferenceError - 존재하지 않는 변수나 함수를 호출할 때 발생하는 에러
// TypeError - 잘못된 방식으로 자료형을 다루면 발생하는 에러
// SyntaxError - 문법에 맞지 않는 코드는 작성하면 발생하는 에러

// 의도적으로 에러 객체 생성
const error = new ReferenceError('에러가 발생했습니다.');
// const error = new TypeError('에러가 발생했습니다.');
// const error = new SyntaxError('에러가 발생했습니다.');

throw error;