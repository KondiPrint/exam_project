import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

export default function Community({ data }) {
  console.log(data.image1);
  return (
    <section className='px-4'>
      {data && (
        <div className='grid grid-cols-4 gap-5'>
          <Image
            src={`http://localhost:5888/images/community/${data.image1}`}
            width={200}
            height={200}
            alt='test1'
            className='col-span-2 row-span-2'
          />
          <Image
            src={`http://localhost:5888/images/community/${data.image2}`}
            width={200}
            height={200}
            alt='test2'
            className='col-span-2'
          />
          <Image
            src={`http://localhost:5888/images/community/${data.image4}`}
            width={200}
            height={200}
            alt='test4'
            className='col-span-2 row-span-2'
          />
          <Image
            src={`http://localhost:5888/images/community/${data.image3}`}
            width={200}
            height={200}
            alt='test3'
            className='col-span-2'
          />
        </div>
      )}
      <h3 className='text-primary'>{data.suptitle}</h3>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <ul className='space-y-2'>
        {data.keypoints.map((points, id) => (
          <li key={id} className='flex gap-2'>
            <div className='bg-red-50 rounded-full p-1 size-fit'>
              <FaCheck className='text-primary' />
            </div>
            {points.keypoint}
          </li>
        ))}
      </ul>
    </section>
  );
}
