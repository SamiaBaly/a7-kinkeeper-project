import React from 'react';

const Status = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='card bg-base-200 text-center p-5 shadow-md space-y-2'>
        <h2 className='text-3xl font-bold text-green-950'>10</h2>
        <p className='text-gray-500 text-xl'>Total Friends</p>
      </div>
      <div className='card bg-base-200 text-center p-5 shadow-md space-y-2'>
        <h2 className='text-3xl font-bold text-green-950'>3</h2>
        <p className='text-gray-500 text-xl'>On Track</p>
      </div>
      <div className='card bg-base-200 text-center p-5 shadow-md space-y-2'>
        <h2 className='text-3xl font-bold text-green-950'>6</h2>
        <p className='text-gray-500 text-xl'>Need Attention</p>
      </div>
      <div className='card bg-base-200 text-center p-5 shadow-md space-y-2'>
        <h2 className='text-3xl font-bold text-green-950'>12</h2>
        <p className='text-gray-500 text-xl'>Interactions this Month</p>
      </div>
      
    </div>
  );
};

export default Status;