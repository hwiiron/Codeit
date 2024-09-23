// 쿼리 파라미터 : mbti, limit, offset

// color-surveys에 리퀘스트를 보낼 때 뒤에 쿼리스트링을 추가할 수 있다.

// mbti로 mbti 특정 mbti에 해당하는 설문만 필터할 수 있고, limit, offset 페이지네이션에 사용됩니다.

//페이지네이션이랑 모든 내용을 한꺼번에 보여주지 않고 페이지처럼 나눠서 보여주는 것이다.

// const res = await fetch('https://learn.codeit.kr/api/color-surveys');
// const res = await fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=10');
// const res = await fetch('https://learn.codeit.kr/api/color-surveys/?mbti=ISTJ');
const res = await fetch('https://learn.codeit.kr/api/color-surveys/5');


// const url = new URL('https://learn.codeit.kr/api/color-surveys');
// url.searchParams.append('offset', 10);
// url.searchParams.append('limit', 10);
// const res = await fetch(url)

const data = await res.json();

console.log(data);