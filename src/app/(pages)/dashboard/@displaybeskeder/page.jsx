import Card from '@/components/Styles/Card';
import fetchData from '@/app/lib/fetchData';
import Link from 'next/link';

export default async function Messages() {
  const { data, error } = await fetchData('http://localhost:5888/inqueries/admin');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const messageAmount = data.length;

  return (
    <>
      <Card>
        <h3 className='text-center text-3xl font-bold'>Beskeder</h3>
        <Link href={'/dashboard/beskeder'} className='btn btn-info'>
          Inbox
          <div className='badge'>{messageAmount}</div>
        </Link>
      </Card>
    </>
  );
}
