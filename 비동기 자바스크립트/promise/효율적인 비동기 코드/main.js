async function printEmploee(id) {
  const response = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
  const data = await response.json();
  console.log(data);
};

for (let i = 1; i < 11; i++) {
  printEmploee(i);
}
