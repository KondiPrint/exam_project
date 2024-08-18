import JsonGetPostById from '@/components/JsonPlaceholder/GetById';
import fetchData from '@/app/lib/fetchData';

export default async function PostsPage({ params }) {
  const postId = params.id; // The ID from the dynamic route

  const { data, error } = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <JsonGetPostById data={data} />;
}
