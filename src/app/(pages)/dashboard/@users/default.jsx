import Card from '@/components/Styles/Card';
import UserAmount from '@/components/Brugere/AntalBrugere';

export default function DefaultUsers() {
  return (
    <>
      <Card>
        <h3 className='text-center text-3xl font-bold'>Brugere</h3>
        <UserAmount />
      </Card>
    </>
  );
}
