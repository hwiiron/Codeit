export async function getFoods({ order = "", cursor = "", limit = 10 }) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}`;
  const response = await fetch(`https://learn.codeit.kr/1106/foods?${query}`);
  const body = response.json();
  return body;
}
