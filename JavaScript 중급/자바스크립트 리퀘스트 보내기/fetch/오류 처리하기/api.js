export async function getColorSurveys(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key])
  })

  const res = await fetch(url)

  // .ok: 상태 코드가 200~299인 경우 true를 반환하며, 그렇지 않으면 false를 반환
  if (!res.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }

  const data = await res.json();
  return data;
}


export async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);

  if (!res.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }

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

  if (!res.ok) {
    throw new Error('데이터를 생성하는데 실패했습니다.');
  }
  
  const data = await res.json();
  return data;
}