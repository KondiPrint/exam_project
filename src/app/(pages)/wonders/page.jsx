import { getWonders } from '@/app/dataFetch/wonders/wondersData';
import WondersCards from '@/components/Wonders/WondersCard';

export default async function Wonders() {
  const data = await getWonders();

  return (
    <>
      <WondersCards data={data} />
    </>
  );
}
