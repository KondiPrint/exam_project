import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function LoginWarning() {
  return (
    <>
      <Card>
        <div>Please Log in to continue</div>
        <Link href={'/signin'}>Click here to login</Link>
      </Card>
    </>
  );
}
