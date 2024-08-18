import Link from 'next/link';

export default function NotFound() {
  return (
    <article className=' p-4 container min-h-screen flex flex-col justify-between'>
      <h1 className='text-9xl w-full select-none text-center font-black text-error'>404</h1>
      <div className='space-y-10 mx-auto text-center'>
        <h2 className='text-3xl font-bold capitalize leading-7'>
          You have discovered a secret place
        </h2>
        <h3 className='text-2xl font-medium break-words text-dull'>
          Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
          been moved to another URL.
        </h3>
      </div>
      <Link href='/' className='btn max-w-96 btn-primary hover:animate-heartbeat'>
        &lt;- Go back to Home Page
      </Link>
    </article>
  );
}
