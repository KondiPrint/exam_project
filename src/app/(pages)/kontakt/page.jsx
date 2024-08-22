import KontaktHero from '@/components/Kontakt/KontaktHero';
import fetchData from '@/app/lib/fetchData';

export default async function Kontakt() {
  const { data, error } = await fetchData('http://localhost:5888/heroes/653d4aa2c81fe875b0503c69');
  const { data: dataInfo, error: errorInfo } = await fetchData(
    'http://localhost:5888/contactinformation'
  );

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (errorInfo) {
    return <div>ErrorInfo: {error}</div>;
  }

  return (
    <>
      <KontaktHero data={data} dataInfo={dataInfo} />
    </>
  );
}
