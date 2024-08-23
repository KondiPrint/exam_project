import fetchData from '@/app/lib/fetchData';
import GetMessages from '@/components/Beskeder/GetBeskeder';

export default async function Inbox() {
  const { data, error } = await fetchData('http://localhost:5888/inqueries/admin');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <GetMessages data={data} />
    </>
  );
}
