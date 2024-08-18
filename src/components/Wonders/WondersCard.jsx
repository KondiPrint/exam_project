import Image from 'next/image';
import Link from 'next/link';

export default function WondersCards({ data }) {
  return (
    <>
      <div className='divider divider-secondary my-10 text-xl'>
        <h1 className='text-3xl font-bold text-center'>Wonders of the World</h1>
      </div>
      <section className='p-4 grid gap-4'>
        {data &&
          data.wonders.map((wonder) => (
            <Link
              key={wonder.id}
              href={{
                pathname: '/wonders/wonderinfo',
                query: { id: wonder.id },
              }}>
              <div className='card lg:card-side bg-base-100 shadow-xl p-2'>
                <figure>
                  <Image
                    src={wonder.image}
                    alt={wonder.name}
                    width={400}
                    height={400}
                    className='cover aspect-square'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{wonder.name}</h2>
                  <p>{wonder.location}</p>
                  <p>{wonder.description}</p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
}
