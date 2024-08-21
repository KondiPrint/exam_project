import Image from 'next/image';
import Link from 'next/link';

export default function Sponsorer({ data, dataCon }) {
  const slicedData = data.slice(0, 1).concat(data.slice(2));

  return (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div className='border-t-[1px] border-secondary border-opacity-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3 py-20 gap-5 space-y-10'>
            <div className='lg:col-start-1 lg:col-end-2 text-center'>
              <h3 className='text-primary'>Sponsorer</h3>
              <h2 className='font-bold text-3xl'>Støt vores sponsorer - de støtter os</h2>
            </div>
            <div className='w-full lg:col-start-2 lg:col-end-4 place-content-center'>
              <ul className='lg:grid gap-10 lg:grid-cols-6 w-full hidden'>
                {slicedData.map((spons, index) => (
                  <li key={spons._id} className='size-20 place-self-center lg:place-self-end'>
                    <Image
                      src={`http://localhost:5888/images/sponsor/${spons.logo}`}
                      width={300}
                      height={300}
                      alt={spons.sponsor}
                      className='size-full object-fill grayscale'
                    />
                  </li>
                ))}
              </ul>

              <div className='flex items-center justify-between w-11/12 h-20 mx-auto px-10 lg:hidden'>
                {slicedData.slice(1, 3).map((spons, index) => (
                  <Image
                    src={`http://localhost:5888/images/sponsor/${spons.logo}`}
                    width={100}
                    height={100}
                    alt={spons.sponsor}
                    className='grayscale scale-75 sm:scale-100'
                    key={spons._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-blue-bg text-white'>
        <div className='px-4 py-14 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 space-y-10 md:flex md:justify-between'>
          <div className='space-y-5'>
            <h3 className='text-primary'>Bliv en af os</h3>
            <h2 className='text-3xl font-bold'>{dataCon.suptitle}</h2>
          </div>
          <Link
            href={'/kontak'}
            className='btn btn-primary text-white rounded-md hover:bg-white hover:text-primary hover:-translate-y-1'>
            {dataCon.title} nu
          </Link>
        </div>
      </section>
    </>
  );
}
