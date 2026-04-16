import React, { useContext, useState } from 'react';
import { TimelineContextPro } from '../../context/TimelineContext';

const TimeLine = () => {
  const { timelineData } = useContext(TimelineContextPro);

  const typeOrder = {
    Meetup: 1,
    text: 2,
    video: 3,
  };

  const [filter, setFilter] = useState('all');

  const filterData = timelineData
    .filter(item => {
      if (filter === 'all') return true;
      return item.type === filter;
    })
    .sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

  return (
    <div className="container mx-auto px-3 sm:px-0">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4">
        Timeline
      </h1>

      {/* Filter */}
      <select
        className="w-full sm:w-auto p-2 border mb-3 rounded-xl text-gray-600 shadow-sm focus:outline-none"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="all">All Friends</option>
        <option value="Meetup">Meetup</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {/* Empty State */}
      {filterData.length === 0 ? (
        <div className="h-[250px] sm:h-[400px] md:h-[500px] bg-base-200 mb-8 rounded-2xl text-center flex flex-col justify-center shadow-md px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mb-2">
            No Data Available
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Please go to home
          </p>
        </div>
      ) : (
        filterData.map((data , i)=> {
          const date = new Date(data.time).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });

          return (
            <div
              key={i}
              className="bg-base-200 shadow-md px-4 py-5 sm:py-6 md:py-8 my-3 rounded-xl
                         flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl md:text-6xl">
                {data.type === 'Meetup' && '🤝'}
                {data.type === 'text' && '🗨️'}
                {data.type === 'video' && '📽️'}
              </div>

              {/* Text */}
              <div>
                <p className="text-base sm:text-lg md:text-xl">
                  <span className="font-bold capitalize text-green-800 text-lg sm:text-xl md:text-2xl">
                    {data.type}
                  </span>{' '}
                  with{' '}
                  <span className="text-base sm:text-lg md:text-xl">
                    {data.name}
                  </span>
                </p>

                <p className="text-gray-500 text-sm sm:text-base">{date}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TimeLine;
