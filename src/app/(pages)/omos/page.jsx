import OmOsHero from '@/components/OmOs/OmOsHero';
import OmOsTestimonial from '@/components/OmOs/OmOsTesti';
import fetchData from '@/app/lib/fetchData';
import Community from '@/components/Forside/Community';
import OmOsGoals from '@/components/OmOs/OmOsGoals';

export default async function OmOs() {
  const { data, error } = await fetchData('http://localhost:5888/heroes/653d44795d213e546d6dd305');
  const { data: dataTesti, error: errorTesti } = await fetchData(
    'http://localhost:5888/heroes/653d480e3e3d4f4b3ce6ac17'
  );
  const { data: dataCom, error: errorCom } = await fetchData('http://localhost:5888/community');
  const { data: dataGo, error: errorGo } = await fetchData('http://localhost:5888/goals');

  if (error) {
    // Handle the error appropriately
    return <div>Error: {error}</div>;
  }

  if (errorTesti) {
    // Handle the error appropriately
    return <div>Error: {errorTesti}</div>;
  }

  if (errorCom) {
    // Handle the error appropriately
    return <div>Error: {errorCom}</div>;
  }
  if (errorGo) {
    // Handle the error appropriately
    return <div>Error: {errorGo}</div>;
  }

  return (
    <>
      <OmOsHero data={data} />
      <OmOsTestimonial data={dataTesti} />
      <Community data={dataCom} />
      <OmOsGoals data={dataGo} />
    </>
  );
}
