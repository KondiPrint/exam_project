import Image from 'next/image';

export default function Interest({ data }) {
  return (
    <>
      <section className='px-4'>
        <h3 className='text-primary'>{data.suptitle}</h3>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <ul className='space-y-2'>
          {data.keypoints.map((points, id) => (
            <li key={id} className='flex gap-2'>
              <div className='bg-red-50 rounded-full p-1 size-fit'></div>
              <div>
                <h4>{points.keypoint}</h4>
                <p> {points.description}</p>
              </div>
            </li>
          ))}
        </ul>
        {data && (
          <div className='grid grid-cols-4 gap-5'>
            <Image
              src={`http://localhost:5888/images/interest/${data.image1}`}
              width={200}
              height={200}
              alt='test1'
              className='col-span-2'
            />
            <Image
              src={`http://localhost:5888/images/interest/${data.image3}`}
              width={200}
              height={200}
              alt='test4'
              className='col-span-2 row-span-2'
            />
            <Image
              src={`http://localhost:5888/images/interest/${data.image2}`}
              width={200}
              height={200}
              alt='test2'
              className='col-span-2 row-span-2'
            />
            <Image
              src={`http://localhost:5888/images/interest/${data.image4}`}
              width={200}
              height={200}
              alt='test3'
              className='col-span-2'
            />
          </div>
        )}
      </section>
    </>
  );
}
