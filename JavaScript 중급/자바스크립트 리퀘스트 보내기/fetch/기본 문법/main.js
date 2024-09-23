const res = await fetch('https://learn.codeit.kr/api/color-surveys');
const data = await res.json();

const { results } = data;
const survey = results[0];
const { id, mbti, colorCode, createAt, updatedAt } = survey;
console.log(id, mbti, colorCode, createAt, updatedAt);

// console.log(results);

// console.log('Status Code:');
// console.log(res.status);
// console.log('Headers:');
// console.log(res.headers);

// console.log(data);