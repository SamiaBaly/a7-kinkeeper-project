import React, { useContext, useState } from 'react';
import { TimelineContextPro } from '../../context/TimelineContext';



const TimeLine = () => {
  const {timelineData} = useContext(TimelineContextPro);
  const typeOrder ={
    Meetup:1,
    text:2,
    video:3
  }

  const [filter, setFilter]=useState("all");

  const filterData =timelineData.filter(item=>{
    if(filter==="all")return true;
    return item.type ===filter;
  }).sort((a,b)=>{
    return typeOrder[a.type]-typeOrder[b.type]
  });




  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-4">Timeline</h1>
      <select
        className=" p-2 border mb-3 rounded-xl text-gray-600 shadow-sm focus:outline-none"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="all">All Friends</option>
        <option value="Meetup">Meetup</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>



      {filterData.length ===0?(
        <div className='h-[500px] bg-base-200 mb-8 rounded-2xl text-center flex flex-col justify-center shadow-md'>
          <h2 className='text-3xl font-bold text-gray-400 mb-2'>No Data Available</h2>
          <p className='text-gray-400'>Please go to home</p>
        </div>
      ):( filterData.map(data => {
        const date = new Date(data.time).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
        return (
          <div
            key={data.id}
            className="bg-base-200 shadow-md px-4 py-8 my-4 flex items-center gap-4 "
          >
            <div className="text-6xl">
              {data.type === 'Meetup' && '🤝'}
              {data.type === 'text' && '🗨️'}
              {data.type === 'video' && '📽️'}
            </div>
            <div>
              <p className=" ">
                <span
                  className={`font-bold capitalize text-green-800 text-2xl`}
                >
                  {data.type}
                </span>{' '}
                with <span className="text-xl">{data.name}</span>
              </p>
              <p className="text-gray-500 text-[16px]">{date}</p>
            </div>
          </div>
        );
      }))}
    </div>
  );
};

export default TimeLine;