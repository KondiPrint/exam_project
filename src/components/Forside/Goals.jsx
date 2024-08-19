import { FaCrown, FaBiking, FaMap, FaHandshake } from 'react-icons/fa';

export default function Goals({ data, dataGoals }) {
  // Reverse the goals array to display them in reverse order
  const sortedGoals = [...dataGoals].sort((a, b) => a.order - b.order); // Use spread operator to avoid mutating the original array

  // Define the icons array
  const goalIcons = [FaHandshake, FaCrown, FaMap, FaBiking];

  return (
    <>
      <section>
        <div className='bg-grey-bg px-4'>
          <h3 className='text-primary'>{data.suptitle}</h3>
          <h2 className=''>{data.title}</h2>
          <p>{data.content}</p>
        </div>
        <div className='bg-blue-bg mx-4'>
          {sortedGoals &&
            sortedGoals.map((goals, id) => {
              const Icons = goalIcons[id % goalIcons.length]; // Get the corresponding icon based on index

              return (
                <div key={id} className='goal-item'>
                  <div className='bg-primary w-fit p-2 rounded-full'>
                    <Icons className='goal-icon text-white' /> {/* Render the icon */}
                  </div>
                  <p className='text-white'>{goals.goalcount}</p>
                  <p className='text-primary'>{goals.goal}</p>
                </div>
              );
            })}
        </div>
        <div className='p-10 bg-green-300'>Video</div>
      </section>
    </>
  );
}
