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


// fetch 오류는 크게 두가지 경우가 있습니다. URL이 잘못되었거나, headers 정보가 잘못되어 리퀘스트 자체가 실패하는 경우가 있고, 
// 리퀘스트를 성공적인데 상태 코드가 실패를 나타내는 경우가 있습니다.

// 여기서 첫 번째 경우에만 fetch가 Rejected 상태가 됩니다. 그래서 두 번째 경우에도 오류를 깔끔하게 처리하려면 수동적으로 오류를 throw 해주면 됩니다.

// 리퀘스트가 성공적으로 처리되고 성공적인 리스폰스가 돌아왔을 때만 데이터를 리턴하고 나머지 모든 경우에 오류를 발생시켜야 api 함수를 사용할 때 try...catch로 로직을 구분할 수 있습니다.