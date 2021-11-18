import { useState } from 'react';

const AdvSearch = () => {
  return (
    <div className='container rounded-lg shadow border-gray-200 border-2 m-5 mx-auto  w-full p-5 flex justify-center'>
      <input
        className='rounded border-2 border-gray-300 w-full p-2'
        placeholder='search'
      />
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10  m-2  border-2 rounded hover:text-blue-500 hover:border-blue-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </div>
  );
};

export default AdvSearch;
