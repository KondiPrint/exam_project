import { FaCrown, FaBiking, FaMap, FaHandshake, FaPlay } from 'react-icons/fa';
export default function OmOsGoals({ data }) {
  const goalIcons = [FaHandshake, FaCrown, FaMap, FaBiking];
  const sortedGoals = [...data].sort((a, b) => a.order - b.order);
  return (
    <>
      <div className='bg-grey-bg'>
        <div className='text-center space-y-10 px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 py-20 md:flex md:justify-evenly md:items-center md:space-y-0'>
          {sortedGoals &&
            sortedGoals.map((goals, id) => {
              const Icons = goalIcons[id % goalIcons.length];

              return (
                <div key={id} className=''>
                  <div className='space-y-2 flex flex-col items-center md:inline-flex'>
                    <div className='indicator'>
                      <div className='rounded-full border-[1px] border-primary mx-auto size-8 flex place-items-center justify-center indicator-item scale-90 -right-3'>
                        <Icons className='text-primary size-4' />
                      </div>
                      <p className='text-5xl font-bold'>{goals.goalcount}</p>
                    </div>
                    <span className='text-secondary text-xs uppercase'>{goals.goal}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
