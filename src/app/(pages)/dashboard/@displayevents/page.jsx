import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function EditEvents() {
  return (
    <>
      <Card>
        <h3 className='text-center font-bold text-3xl'>Events</h3>
        <Link href={'/dashboard/editevent'} className='btn btn-info'>
          Ret Events
        </Link>
      </Card>
    </>
  );
}
