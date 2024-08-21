import SignInPage from '@/components/Form/SignIn';
import Header from '@/components/Layout/Header';

export default function LoginPage() {
  return (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        <h1 className='text-4xl font-bold py-20 text-center'>Log på</h1>
        <SignInPage />
      </section>
    </>
  );
}
