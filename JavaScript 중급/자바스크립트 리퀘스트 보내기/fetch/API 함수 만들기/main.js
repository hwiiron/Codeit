import { getColorSurveys, getColorSurvey, createColorSurvey } from "./api.js";

// const data = await getColorSurveys({ offset: 20, limit: 20});
// console.log(data);

// const data2 = await getColorSurvey(10);
// console.log(data2);


const surveyData = {
  mbti: 'ISTJ',
  colorCode: '#AAAAAA',
  password: '1234',
};

const data3 = await createColorSurvey(surveyData);
console.log(data3);