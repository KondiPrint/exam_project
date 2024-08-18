import React, { useState } from 'react';

export default function Search({ setSearchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  // Handle the search logic
  const handleSearch = () => {
    setSearchTerm(localSearchTerm);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='relative w-full max-w-xs flex items-center join'>
      <div className='relative w-full'>
        <input
          type='text'
          value={localSearchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder=' '
          required
          className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full join-item'
        />
        <label
          htmlFor='search'
          className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
          Search...
        </label>
      </div>
      <button onClick={handleSearch} className='btn join-item'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='size-6'>
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}
