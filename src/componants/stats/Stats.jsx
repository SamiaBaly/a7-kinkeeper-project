
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContextPro } from '../../context/TimelineContext';
import { TrendingDown } from 'lucide-react';





const Stats = () => {
  const { timelineData } = useContext(TimelineContextPro);
  

  const meetupCount = timelineData.filter(
    item => item.type === 'Meetup',
  ).length;
  const textCount = timelineData.filter(item => item.type === 'text').length;
  const videoCount = timelineData.filter(item => item.type === 'video').length;
  const total = meetupCount + textCount + videoCount;

  if (total === 0) {
    return (
      <div className="container mx-auto mt-10 h-[600px] bg-base-200  rounded-2xl text-center flex flex-col justify-center shadow-md">
        <TrendingDown className='mx-auto text-gray-500' />
        <h2 className="text-3xl font-bold text-gray-400 mb-2">
          No stats Available
        </h2>
        <p className="text-gray-400">Please go to home</p>
      </div>
    );
  }

  const data = [
    { name: 'Meetup', value: meetupCount, fill: '#244d3f' },
    { name: 'Text', value: textCount, fill: '#7f37f5' },
    { name: 'Video', value: videoCount, fill: '#68b889' },
  ];

  
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Friendship Analytics</h1>

      <div className="my-8 flex justify-center items-center bg-base-200 py-5 rounded-2xl">
        <PieChart
          style={{
            width: '100%',
            maxWidth: '500px',
            maxHeight: '80vh',
            aspectRatio: 1,
          }}
        >
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            innerRadius={100}
            outerRadius={130}
            // Corner radius is the rounded edge of each pie slice
            cornerRadius={10}
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;