import Link from 'next/link';
import TestHeader from '../Layout/TestHeader';

export default function ForsideHero({ data }) {
  const slicedMobileHeroText = data?.title.split('for')[0] + 'for';
  return (
    <>
      <section className='bg-grey-bg px-4'>
        <TestHeader />
        <div className=''>
          <div className=''>
            <h1 className='font-bold'>
              {slicedMobileHeroText} <span className='text-primary'>Grupper</span>
            </h1>
            <p className='py-6'>{data?.content}</p>
            <Link href={data?.buttonlink} className='btn rounded-md btn-primary text-white px-6'>
              {data?.buttontext}
            </Link>
            {/* <iframe
              width='200'
              height='200'
              src='https://www.youtube.com/embed/H55W1NhAbQo?si=IbVSJVMl1tZh5L1d'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen></iframe> */}
            {/* <video src={data.videolink}></video> */}
            <img src='http://localhost:5888/images/hero/hero1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
}
