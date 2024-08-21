import fetchData from '@/app/lib/fetchData';
import GetEvents from '@/components/Events/GetEvents';
import Sponsorer from '@/components/Events/Sponsorer';
import Header from '@/components/Layout/Header';

export default async function Events() {
  // Fetch data using the universal fetcher
  const { data, error } = await fetchData('http://localhost:5888/events');
  const { data: dataSpon, error: errorSpon } = await fetchData('http://localhost:5888/sponsors');
  const { data: dataTxt, error: errorTxt } = await fetchData(
    'http://localhost:5888/heroes/653d5f0deb8bede598fd91ad'
  );
  const { data: dataContact, error: errorContact } = await fetchData(
    'http://localhost:5888/heroes/653d4aa2c81fe875b0503c69'
  );

  if (error) {
    // Handle the error appropriately
    return <div>Error: {error}</div>;
  }

  // Handle any additional errors from the second fetch
  if (errorTxt) {
    return <div>Error fetching additional data: {errorTxt}</div>;
  }

  if (errorSpon) {
    return <div>Error fetching additional data: {errorSpon}</div>;
  }

  if (errorContact) {
    return <div>Error fetching additional data: {errorContact}</div>;
  }

  // Pass data to client component
  return (
    <>
      <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        <div className='w-fit mx-auto text-center space-y-5 py-12'>
          <span className='text-primary'>{dataTxt.suptitle}</span>
          <h1 className='text-3xl font-bold'>{dataTxt.title}</h1>
        </div>
      </div>
      <GetEvents data={data} />
      <Sponsorer data={dataSpon} dataCon={dataContact} />
    </>
  );
}
