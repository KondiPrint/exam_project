import SignUpPage from '@/components/Form/SignUp';
import Header from '@/components/Layout/Header';

export default function CreateAccount() {
  return (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        <h1 className='text-4xl font-bold py-20 text-center'>Opret din bruger</h1>

        <SignUpPage />
      </section>
    </>
  );
}
