import GetEventById from '@/components/Events/GetEventById';
import fetchData from '@/app/lib/fetchData';

export default async function EventById({ params }) {
  const eventId = params.id; // The ID from the dynamic route

  const { data, error } = await fetchData(`http://localhost:5888/events/${eventId}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <GetEventById data={data} />;
}
