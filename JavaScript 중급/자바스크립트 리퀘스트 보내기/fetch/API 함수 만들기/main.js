import { getColorSurveys, getColorSurvey, createColorSurvey, deleteSurvey } from "./api.js";

// const data = await getColorSurveys({ offset: 20, limit: 20});
// console.log(data);

// const data2 = await getColorSurvey(100000135);
// console.log(data2);


// const surveyData = {
//   mbti: 'ISTJ',
//   colorCode: '#BBBBBB',
//   password: '1234',
// };

// const data3 = await createColorSurvey(surveyData);
// console.log(data3);



const data4 = await deleteSurvey(100000136);
console.log(data4);