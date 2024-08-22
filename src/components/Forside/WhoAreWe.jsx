'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPinterest, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function WhoAreWe({ data, dataTxt }) {
  const [randomMembers, setRandomMembers] = useState([]);
  const [randomIcons, setRandomIcons] = useState([]);

  const getRandomIcons = () => {
    const icons = [FaPinterest, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp];
    const shuffledIcon = icons.sort(() => 0.5 - Math.random());
    return shuffledIcon.slice(0, 3);
  };

  useEffect(() => {
    setRandomIcons(getRandomIcons());
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const shuffledMember = [...data].sort(() => 0.5 - Math.random());
      const selectedMembers = shuffledMember.slice(0, 4);
      setRandomMembers(selectedMembers);
    }
  }, [data]);

  return (
    <>
      <section className='bg-grey-bg px-4 py-20 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div>
          <div className='space-y-5 md:grid md:grid-cols-2 md:items-center'>
            <div>
              <h3 className='text-primary'>{dataTxt.suptitle}</h3>
              <h2 className='text-3xl font-bold'>{dataTxt.title}</h2>
            </div>
            <p className='text-secondary font-semibold text-sm'>{dataTxt.content}</p>
          </div>

          <div className='space-y-20 my-10 md:grid md:grid-cols-4 md:place-items-center md:space-y-0 md:gap-5'>
            {randomMembers.map((member, id) => (
              <figure key={id} className='relative'>
                <div className='relative'>
                  <Image
                    src={`http://localhost:5888/images/testimonial/${member.image}`}
                    alt={member.name}
                    width={400}
                    height={400}
                    className='object-cover w-full h-64 md:h-64 md:w-60 rounded-lg'
                  />
                  <div className='flex flex-col items-end justify-end p-4 absolute top-0 right-0 text-white gap-1'>
                    {randomIcons.map((Icon, index) => (
                      <div
                        key={index}
                        className='bg-primary rounded-full mx-auto size-6 flex place-items-center justify-center hover:bg-white group'>
                        <Icon className='text-white size-3 group-hover:text-primary' />
                      </div>
                    ))}
                  </div>
                  <figcaption className='absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-10/12'>
                    <div className='p-4 shadow-xl bg-white rounded-md'>
                      <h4 className='text-sm font-bold'>{member.name}</h4>
                      <p className='text-primary text-xs'>{member.experience}</p>
                      <p className='text-[0.68rem] italic text-secondary pt-1'>
                        {member.motivation}
                      </p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
