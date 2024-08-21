import UserAmount from '@/components/Brugere/AntalBrugere';
import Card from '@/components/Styles/Card';

export default function Users() {
  return (
    <>
      <Card>
        <h3 className='text-center text-3xl font-bold'>Brugere</h3>
        <UserAmount />
      </Card>
    </>
  );
}
