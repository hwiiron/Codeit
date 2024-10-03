export async function getFoods(order) {
  const response = await fetch(
    `https://learn.codeit.kr/1106/foods?order=${order}`
  );
  const body = response.json();
  return body;
}
