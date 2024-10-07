const BASE_URL = "https://learn.codeit.kr/";

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 0,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}1220/film-reviews?${query}`);
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function createReview(formData) {
  const response = await fetch(`${BASE_URL}1220/film-reviews`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
