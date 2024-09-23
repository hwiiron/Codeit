// fetch 함수는 기본적으로 GET 리퀘스트를 보낸다.

// POST나 다른 종류의 리퀘스트 보내는 방법은 fetch 함수의 두 번째 리퀘스트로 다양한 옵션을 넘겨줄 수 있다.

const surveyData = {
  mbti: 'ENFP',
  colorCode: '#ABCDEF',
  password: '0000',
};

const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
  method: 'POST',
  // method: 'PATCH',
  // method: 'DELETE',
  body: JSON.stringify(surveyData),
  headers: {
    'Content-Type': 'application/json',
  }
})

// POST 리퀘스트는 보통 바디를 전달한다.
// color-surveys api의 경우 mbti, 좋아하는 색깔의 Hex 코드, 설문에 대한 비밀번호를 body로 전달해야 함.

// 리퀘스트 body도 fetch함수의 두 번째 아규먼트 옵션으로 설정하면 된다.

// surveyData 데이터는 자바스크립트 객체로 웹으로 데이터를 주고 받을 때는 json 문자열을 사용한다. 그래서 surveyData를 json 문자열로 변환해야 함. - JSON.stringify()

// 데이터를 보낼 때는 Content-Type header로 어떤 형식의 데이터를 보내는지 알려주는 것이 좋다. headers 프로퍼티로 header 설정 가능

const data = await res.json();
console.log(data);