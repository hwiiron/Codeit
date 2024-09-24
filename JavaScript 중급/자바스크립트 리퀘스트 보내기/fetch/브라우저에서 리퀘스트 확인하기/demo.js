import { getColorSurvey, createColorSurvey } from './api.js';

const btn = document.querySelector('button');
const statusDiv = document.querySelector('div.status');
const dataDiv = document.querySelector('div.data');
const mbtiInput = document.querySelector('#mbti');
const colorCodeInput = document.querySelector('#colorCode');

btn.addEventListener('click', async function (e) {
  statusDiv.textContent = '로딩 중...';
  dataDiv.innerHTML = '';
  try {
    const surveyData = {
      mbti: mbtiInput.value,
      colorCode: colorCodeInput.value,
      password: '0000',
    };

    const survey = await createColorSurvey(surveyData);
    // const survey = await getColorSurvey(3);
    
    statusDiv.textContent = '완료';
    dataDiv.innerHTML = `<span>${survey.mbti}</span><span>${survey.colorCode}</span>`;
  } catch (e) {
    statusDiv.textContent = '오류';
    dataDiv.innerHTML = `<span>${e.message}</span>`;
  }
});