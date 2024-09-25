import { getColorSurveys, getColorSurvey, createColorSurvey  } from './axiosApi.js';

// console.log('GET /color-surveys');
// const data = await getColorSurveys({offset: 10, limit: 5});
// console.log(data);

// console.log('GET /color-surveys/:id');
// try {
//   const survey = await getColorSurvey(123);
//   console.log(survey);
// } catch (error) {
//   console.log('오류가 발생했습니다.');
//   // console.log(error.message);
//   console.log(error.response.status);
//   console.log(error.response.data);
// }

// console.log('POST /color-surveys');
const surveyData = {
  mbti: 'ISFP',
  // colorCode: '#111111',
  password: '0000'
};

try {
  const newColorSurvey = await createColorSurvey(surveyData);
  console.log(newColorSurvey);
} catch(error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log('리퀘스트가 실패했습니다.');
  }
}