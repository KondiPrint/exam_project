import { getData } from './data';

export default async function WonderInfo(id) {
  const dataId = id.searchParams.id;
  const data = await getData(dataId);

  console.log(data);

  return <>{data && <p>{data.wonder.name}</p>}</>;
}
