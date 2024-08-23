import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function DefaultForsideHeroAdmin() {
  return (
    <>
      <Card>
        <h3 className='text-center text-3xl font-bold'>Forside Hero</h3>
        <Link href={'/dashboard/forsidehero'} className='btn btn-info'>
          Ret Hero
        </Link>
      </Card>
    </>
  );
}
