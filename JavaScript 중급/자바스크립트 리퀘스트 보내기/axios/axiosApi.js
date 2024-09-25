import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn.codeit.krㄱㄱㄱ/api',
  timeout: 3000,
});

export async function getColorSurveys(params = {}) {
  // const url = new URL('https://learn.codeit.kr/api/color-surveys');
  // Object.keys(params).forEach((key) => {
  //   url.searchParams.append(key, params[key])
  // });

  const res = await instance.get('/color-surveys', {
    params
  });
  return res.data;
}


export async function getColorSurvey(id) {
  const res = await instance.get(`/color-surveys/${id}`);
  return res.data;
}


export async function createColorSurvey(surveyData) {
  const res = await instance.post('/color-surveys', surveyData);
  return res.data;
}