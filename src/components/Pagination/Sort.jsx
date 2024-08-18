import React from 'react';

export default function Sort({ options, setSortCriteria }) {
  return (
    <div className='form-control w-fit max-w-xs'>
      <select
        className='select select-bordered focus:outline-none focus:border-primary'
        onChange={(e) => setSortCriteria(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
