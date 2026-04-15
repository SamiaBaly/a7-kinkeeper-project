import React, { Children, createContext, useState } from 'react';


export const TimelineContextPro=createContext();

const TimelineContext = ({children}) => {
  const [timelineData, setTimelineData]=useState([]);
  const data ={
    timelineData,
    setTimelineData
  }
  return (
    <TimelineContextPro.Provider value={data}>{children}

    </TimelineContextPro.Provider>
  );
};

export default TimelineContext;