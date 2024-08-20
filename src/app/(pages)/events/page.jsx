import fetchData from '@/app/lib/fetchData';
import GetEvents from '@/components/Events/GetEvents';
import Header from '@/components/Layout/Header';

export default async function Events() {
  // Fetch data using the universal fetcher
  const { data, error } = await fetchData('http://localhost:5888/events');
  const { data: dataTxt, error: errorTxt } = await fetchData(
    'http://localhost:5888/heroes/653d5f0deb8bede598fd91ad'
  );

  if (error) {
    // Handle the error appropriately
    return <div>Error: {error}</div>;
  }

  // Handle any additional errors from the second fetch
  if (errorTxt) {
    return <div>Error fetching additional data: {errorTxt}</div>;
  }

  // Pass data to client component
  return (
    <>
      <div className='sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        <div className='w-96 mx-auto text-center space-y-5 py-12'>
          <span className='text-primary'>{dataTxt.suptitle}</span>
          <h1 className='text-3xl font-bold'>{dataTxt.title}</h1>
        </div>
        <GetEvents data={data} />
      </div>
    </>
  );
}
