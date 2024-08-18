import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function DefaultDisplayPosts() {
  return (
    <>
      <Card>
        <div>Display Posts</div>
        <Link href={'/dashboard/archived'}>Archived</Link>
      </Card>
    </>
  );
}
