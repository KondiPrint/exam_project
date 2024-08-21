import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

export default function OmOsTestimonial({ data }) {
  const slicedContent = data.content.slice(0, 219);

  return (
    <>
      <section className='bg-blue-bg pt-20 md:pt-0'>
        <div className='space-y-7 px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 md:grid md:grid-cols-2 md:items-center md:overflow-hidden md:gap-5'>
          <div className='space-y-5'>
            <div className='space-y-5'>
              <h3 className='text-primary'>{data.suptitle}</h3>
              <h2 className='text-3xl font-bold text-white md:text-2xl'>{data.title}</h2>
            </div>
            <div className='flex gap-5 items-center'>
              <p className='text-white text-xs leading-5'>{slicedContent}</p>
              <div className='bg-primary rounded-full size-16 p-5'>
                <FaQuoteRight className='size-6 text-white' />
              </div>
            </div>
          </div>
          <div className='size-2/3 mx-auto pt-10 md:size-full md:pt-0'>
            <Image
              src={`http://localhost:5888/images/hero/${data.image}`}
              width={800}
              height={800}
              alt={data.image}
              className='size-full'
            />
          </div>
        </div>
      </section>
    </>
  );
}
