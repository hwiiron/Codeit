import { getColorSurveys, getColorSurvey, createColorSurvey  } from './api.js';



try {
  const data = await getColorSurveys({mbti: 'eeee'});
  console.log(data);
} catch (error) {
  console.log('오류 발생');
  console.log(error.message);
}