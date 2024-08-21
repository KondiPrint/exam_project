import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function EditEvents() {
  return (
    <>
      <Card>
        <div>Edit Events</div>
        <Link href={'/dashboard/archived'}>Archived</Link>
        <Link href={'/dashboard/editevent'} className='btn'>
          Ret Events
        </Link>
      </Card>
    </>
  );
}
