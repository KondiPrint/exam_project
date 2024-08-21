import Image from 'next/image';
import Link from 'next/link';
import Header from '../Layout/Header';

export default function OmOsHero({ data }) {
  return (
    <>
      <section className='bg-grey-bg'>
        <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
          <Header />
          <div className='space-y-4 pt-20 md:grid md:grid-cols-2 lg:gap-10'>
            <div className='space-y-4'>
              <h3 className='text-primary'>{data.suptitle}</h3>
              <h1 className='text-4xl font-bold'>{data.title}.</h1>
            </div>
            <div className='space-y-8 pb-12'>
              <p className='text-secondary font-semibold text-sm'>{data.content}</p>
              <Link href={'/kontakt'} className='btn text-white bg-black rounded-md border-none'>
                {data.buttontext}!
              </Link>
            </div>
          </div>
          <div className='pb-20'>
            <Image
              src={`http://localhost:5888/images/hero/${data.image}`}
              width={800}
              height={800}
              alt={data.image}
              className='rounded-lg aspect-[3/2] object-cover sm:aspect-[7/3] size-full'
            />
          </div>
        </div>
      </section>
    </>
  );
}
