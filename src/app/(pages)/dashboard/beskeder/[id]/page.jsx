import GetBeskederById from '@/components/Beskeder/GetBeskederById';

export default function viewMessageById() {
  return (
    <>
      <h1 className='text-center text-3xl py-10'>Beskeder</h1>
      <GetBeskederById />
    </>
  );
}
