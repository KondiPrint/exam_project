export async function getData(id) {
  console.log('#1 Wonderinfo: Fetching data for ID:', id);

  // Ensure that the id is either a string or a number
  if (!(typeof id === 'string' || typeof id === 'number' || typeof id === 'object')) {
    console.error('#2 Wonderinfo: Invalid ID type:', typeof id);
    throw new Error(typeof id);
  }

  // If the id is a string, convert it to a number
  if (typeof id === 'string' || typeof id === 'object') {
    id = parseInt(id);
  }

  // Construct the URL with the id
  const url = `http://localhost:3000/api/wonders/${id}`;
  console.log('#3 Wonderinfo: URL:', url);

  const res = await fetch(url);

  if (!res.ok) {
    const errorMessage = `#4 Wonderinfo: Failed to fetch data: ${res.status} ${res.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return res.json();
}
