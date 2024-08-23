import Card from '@/components/Styles/Card';
import fetchData from '@/app/lib/fetchData';

export default async function DefaultMessages() {
  const { data, error } = await fetchData('http://localhost:5888/inqueries/admin');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const messageAmount = data.length;
  return (
    <>
      <Card>
        <h3 className='text-center text-3xl font-bold'>Beskeder</h3>
        <button className='btn btn-info'>
          Inbox
          <div className='badge'>{messageAmount}</div>
        </button>
      </Card>
    </>
  );
}
