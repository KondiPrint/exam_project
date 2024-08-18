import JsonGetPosts from '@/components/JsonPlaceholder/GetPosts';
import fetchData from '@/app/lib/fetchData';

export default async function PostsPage() {
  // Fetch data using the universal fetcher
  const { data, error } = await fetchData('https://jsonplaceholder.typicode.com/posts/');

  if (error) {
    // Handle the error appropriately
    return <div>Error: {error}</div>;
  }

  // Pass data to client component
  return <JsonGetPosts data={data} />;
}
