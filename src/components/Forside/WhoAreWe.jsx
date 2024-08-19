import Image from 'next/image';

export default function WhoAreWe({ dataTesti }) {
  const slicedTesti = dataTesti.slice(0, 4);

  return (
    <>
      <section className='bg-grey-bg px-4 mb-20'>
        <div>
          <h3>he</h3>
          <h2>ha</h2>
          <p>hi</p>
        </div>

        <div className='space-y-10'>
          {dataTesti &&
            slicedTesti.map((testimon, id) => (
              <figure className='relative' key={id}>
                <div className='absolute flex-col right-5 text-white'>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
                <Image
                  src={`http://localhost:5888/images/testimonial/${testimon.image}`}
                  alt='test'
                  width={200}
                  height={200}
                  className='object-cover w-full h-64'
                />
                <figcaption className='absolute -bottom-10 left-1/2 card w-80 p-0 shadow-xl bg-white transform -translate-x-1/2'>
                  <div className='card-body p-0'>
                    <h4 className='card-title'>{testimon.name}</h4>
                    <p>{testimon.experience}</p>
                    <p>{testimon.motivation}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
        </div>
      </section>
    </>
  );
}
