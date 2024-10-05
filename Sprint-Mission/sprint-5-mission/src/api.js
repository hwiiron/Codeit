export async function getBestItems() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
  );
  const data = await response.json();
  return data;
}

export async function getAllItems({ page = 1, orderBy = "recent" }) {
  const query = `page=${page}&pageSize=10&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await response.json();
  return data;
}
