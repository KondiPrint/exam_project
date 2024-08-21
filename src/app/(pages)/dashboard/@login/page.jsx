import Card from '@/components/Styles/Card';
import Link from 'next/link';

export default function LoginWarning() {
  return (
    <>
      <div className='hero min-h-screen'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-4xl font-bold'>Log venligst ind for at fortsætte!</h1>
            <p className='py-6'>
              For at gøre processen lidt nemmere, så kan du logge ind med kontoen:
              <br />
              Brugernavn: admin
              <br />
              Password: admin123
            </p>
            <Link href={'/signin'} className='btn btn-primary'>
              Click here to login
            </Link>
          </div>
        </div>
      </div>
      <Card>
        <div>Please Log in to continue</div>
      </Card>
    </>
  );
}
