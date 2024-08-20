import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function Community({ data }) {
  return (
    <section className='px-4 py-20 space-y-10 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
      <div className='space-y-5 md:grid md:grid-cols-2 md:gap-10 md:first:items-center'>
        <div className=''>
          {data && (
            <div className='grid grid-cols-4 gap-5'>
              <Image
                src={`http://localhost:5888/images/community/${data.image1}`}
                width={800}
                height={800}
                alt='Two cyclist smiling'
                className='col-span-2 row-span-2 rounded-lg'
              />
              <Image
                src={`http://localhost:5888/images/community/${data.image2}`}
                width={800}
                height={800}
                alt='Cyclist looking left'
                className='col-span-2 rounded-lg'
              />
              <Image
                src={`http://localhost:5888/images/community/${data.image4}`}
                width={800}
                height={800}
                alt='Legs of two cyclist'
                className='col-span-2 row-span-2 rounded-lg'
              />
              <Image
                src={`http://localhost:5888/images/community/${data.image3}`}
                width={800}
                height={800}
                alt='Legs and bike of a cyclist'
                className='col-span-2 rounded-lg'
              />
            </div>
          )}
        </div>
        <div className='space-y-5'>
          <h3 className='text-primary'>{data.suptitle}</h3>
          <h2 className='text-3xl font-bold'>{data.title}</h2>
          <p className='text-secondary font-semibold text-sm'>{data.content}</p>

          <ul className='space-y-2 text-secondary sm:space-y-0 sm:grid-cols-2 sm:grid sm:gap-5'>
            {data.keypoints.map((points, id) => (
              <li key={id} className='flex gap-2 text-xs'>
                <div className='bg-red-50 rounded-full p-1 size-fit'>
                  <FaCheck className='text-primary' />
                </div>
                {points.keypoint}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
