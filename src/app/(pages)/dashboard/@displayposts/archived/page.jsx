import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function ArchivedDisplayPosts() {
  return (
    <>
      <Card>
        <div>Archived Display Posts</div>
        <Link href={'/dashboard'}>Default</Link>
      </Card>
    </>
  );
}
