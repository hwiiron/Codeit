const BASE_URL = 'https://learn.codeit.kr/api/codestudit';

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  return await response.json();
}
