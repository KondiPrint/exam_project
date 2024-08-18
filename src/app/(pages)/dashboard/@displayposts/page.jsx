import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function EditPosts() {
  return (
    <>
      <Card>
        <div>Edit Posts</div>
        <Link href={'/dashboard/archived'}>Archived</Link>
        <Link href={'/dashboard/editposts'} className='btn'>
          Edit posts
        </Link>
      </Card>
    </>
  );
}
