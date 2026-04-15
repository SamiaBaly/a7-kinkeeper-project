import React from 'react';
import logoImg from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { RiTimeLine } from 'react-icons/ri';
import { ChartLine, History, House } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-3">
        <img src={logoImg} alt="KeenKeeper" />
        <ul className="flex justify-between items-center space-x-4 font-semibold text-[#64748B]">
          <NavLink to={'/'} className="flex gap-2">
            <House />
            Home
          </NavLink>
          <NavLink to={'/timeline'} className="flex gap-2">
            <History />
            Timeline
          </NavLink>
          <NavLink to={'/stats'} className="flex gap-2">
            
              <ChartLine />
              Stats
          
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;