import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function DefaultGoalsEdit() {
  return (
    <>
      <Card>
        <h3 className='text-center text-3xl font-bold'>Goals</h3>
        <Link href={'/dashboard/editgoals'} className='btn btn-info'>
          Ret Goals
        </Link>
      </Card>
    </>
  );
}
