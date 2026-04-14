import React, { Suspense } from 'react';

import HeroBanner from '../../componants/HomePage/HeroBanner/HeroBanner';
import AllFriends from '../../componants/HomePage/allFriends/AllFriends';
import Status from '../../componants/HomePage/Status/Status';
import { GridLoader } from 'react-spinners';

const HomePage = () => {
 
  
  return (
    <div className="container mx-auto">
      <HeroBanner></HeroBanner>
      <Status></Status>
      <Suspense
        fallback={
          <div className='flex justify-center items-center'>
            <GridLoader color='green'></GridLoader>
          </div>
        }
      >
        <AllFriends></AllFriends>
      </Suspense>
    </div>
  );
};

export default HomePage;