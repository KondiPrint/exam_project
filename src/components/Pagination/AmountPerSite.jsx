import React from 'react';

export default function AmountPerSite({
  setAmountPerSite,
  setCurrentSite,
  options = [5, 10, 20, 30],
  amountPerSite,
}) {
  return (
    <div className='flex items-center gap-2'>
      {options.map((o, index) => (
        <React.Fragment key={o}>
          <button
            className={`link ${
              amountPerSite === o ? 'text-primary font-bold' : 'text-base-content'
            }`}
            onClick={() => {
              setAmountPerSite(o);
              setCurrentSite(0);
            }}>
            {o}
          </button>
          {index < options.length - 1 && <span className='text-base-content mx-1'>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
