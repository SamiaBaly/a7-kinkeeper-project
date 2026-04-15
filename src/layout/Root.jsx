import React from 'react';
import Navbar from '../componants/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componants/Footer/Footer';
import HeroBanner from '../componants/HomePage/HeroBanner/HeroBanner';


const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;