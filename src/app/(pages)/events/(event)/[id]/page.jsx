import GetEventById from '@/components/Events/GetEventById';
import fetchData from '@/app/lib/fetchData';
import Header from '@/components/Layout/Header';
import CountdownTimer from '@/components/Styles/Countdown';

export default async function EventById({ params }) {
  const eventId = params.id;

  const { data, error } = await fetchData(`http://localhost:5888/events/${eventId}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        <div className='bg-grey-bg rounded-md p-6 my-5 relative w-10/12 mx-auto'>
          <span className='text-primary text-sm badge absolute -top-1 -left-1 '>
            {data.category.category}
          </span>
          <h1 className='text-3xl font-bold text-center sm:p-10'>{data.title}</h1>
        </div>
        <div className='space-y-2'>
          <h3 className='text-center text-primary font-bold text-xl'>
            Eventen starter d. {formatDate(data.eventdate)}
          </h3>
          <CountdownTimer data={data} />
        </div>
        <GetEventById data={data} />
      </section>
    </>
  );
}
