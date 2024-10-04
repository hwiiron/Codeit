export async function getBestItems() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
  );
  const data = response.json();
  return data;
}

export async function getAllItems() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent"
  );
  const data = response.json();
  return data;
}