import Link from 'next/link';

export default function NotFound() {
  return (
    <article className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-lg'>
          <h1 className='text-9xl font-bold text-error'>404</h1>
          <h2 className='py-6 text-5xl text-error'>Du har opdaget et hemmeligt sted</h2>
          <p className='py-6'>
            Desværre, så er det en 404-side. Du har måske skrevet addressen forkert, den er blevet
            fjernet eller den er flyttet til et andet URL.
          </p>
          <Link href='/' className='btn btn-primary hover:animate-heartbeat'>
            &lt;- Skynd dig tilbage til forsiden!
          </Link>
        </div>
      </div>
    </article>
  );
}
