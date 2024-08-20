import Image from 'next/image';
import { PiWallThin, PiProjectorScreenChartThin, PiWindThin, PiGearSixThin } from 'react-icons/pi';

export default function Interest({ data }) {
  const intIcons = [PiProjectorScreenChartThin, PiWallThin, PiWindThin, PiGearSixThin];
  return (
    <>
      <section className='px-4 py-44 space-y-7 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div className='space-y-5 md:grid md:grid-cols-2 md:gap-10 xl:gap-32 md:space-y-0 md:items-center'>
          <div>
            <div className='space-y-5'>
              <h3 className='text-primary'>{data.suptitle}</h3>
              <h2 className='text-3xl font-bold 2xl:text-5xl'>{data.title}</h2>
              <p className='text-secondary font-semibold text-sm 2xl:leading-6'>{data.content}</p>

              <ul className='space-y-2 text-secondary sm:space-y-0 sm:grid-cols-2 sm:grid sm:gap-5'>
                {data.keypoints.map((points, id) => {
                  const Icons = intIcons[id % intIcons.length];
                  return (
                    <li key={id} className='flex gap-5'>
                      <div className='bg-red-50 rounded-full p-2 size-fit'>
                        <Icons className='text-primary size-6' />
                      </div>
                      <div>
                        <h4 className='font-bold font-lexend mb-2 text-lg text-black'>
                          {points.keypoint}
                        </h4>
                        <p className='text-secondary font-archivo text-xs font-semibold'>
                          {points.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='xl:size-11/12 xl:justify-self-end'>
            {data && (
              <div className='grid grid-cols-4 gap-5 justify-end'>
                <Image
                  src={`http://localhost:5888/images/interest/${data.image1}`}
                  width={800}
                  height={800}
                  alt='test1'
                  className='col-span-2 rounded-lg '
                />
                <Image
                  src={`http://localhost:5888/images/interest/${data.image3}`}
                  width={800}
                  height={800}
                  alt='test4'
                  className='col-span-2 row-span-2 rounded-lg'
                />
                <Image
                  src={`http://localhost:5888/images/interest/${data.image2}`}
                  width={800}
                  height={800}
                  alt='test2'
                  className='col-span-2 row-span-2 rounded-lg'
                />
                <Image
                  src={`http://localhost:5888/images/interest/${data.image4}`}
                  width={800}
                  height={800}
                  alt='test3'
                  className='col-span-2 rounded-lg'
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
