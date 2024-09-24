export async function getColorSurveys(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  // url.searchParams.append('offset', 10);
  // url.searchParams.append('limit', 10);

  // params 객체의 프로퍼티를 돌면서 url.searchParams에 추가
  // params = { offset: 5, limit: 10};
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key])
  })
  // params는 객체이기에 바로 ForEach를 사용할 수 없는데 Object.keys(params)가 params를 배열로 반환하므로 forEach 사용할 수 있다.

  const res = await fetch(url)
  const data = await res.json();
  return data;
}


export async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
  const data = await res.json();
  return data;
}


export async function createColorSurvey(surveyData) {
  const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
    method: 'POST',
    body: JSON.stringify(surveyData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  
  const data = await res.json();
  return data;
}


export async function deleteSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({"password": "1234"}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json();
  return data;
}