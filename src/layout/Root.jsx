import React from 'react';
import Navbar from '../componants/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componants/Footer/Footer';
import HeroBanner from '../componants/HomePage/HeroBanner/HeroBanner';


const Root = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;