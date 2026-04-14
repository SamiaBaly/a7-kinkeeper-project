import React from 'react';

const HeroBanner = () => {
  return (
    <div>
      <div className='container mx-auto text-center my-[80px]'>
        <h2 className="text-[#1F2937] text-[48px] font-bold">Friends to keep close in your life</h2>
        <p className="text-[#64748B] my-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br /> the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white text-xl">
          + Add a Friend
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;