export async function getWonders() {
  const res = await fetch('http://localhost:3000/api/wonders');
  if (!res.ok) {
    throw new Error('#1 dataFetch Wonders: Failed to fetch data');
  }
  return res.json();
}
