import fetchData from '@/app/lib/fetchData';
import GetGoalsAdmin from '@/components/Goals/GetGoals';

export default async function Inbox() {
  const { data, error } = await fetchData('http://localhost:5888/goals');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <GetGoalsAdmin data={data} />
    </>
  );
}
