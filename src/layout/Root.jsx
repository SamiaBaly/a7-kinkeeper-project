import React from 'react';
import Navbar from '../componants/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componants/Footer/Footer';
import HeroBanner from '../componants/HeroBanner/HeroBanner';

const Root = () => {
  return (
    <div>
      <Navbar/>
      <HeroBanner></HeroBanner>
      <Outlet/>
      <Footer/>
      
    </div>
  );
};

export default Root;