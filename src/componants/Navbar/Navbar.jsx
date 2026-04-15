import React from 'react';
import logoImg from '../../assets/logo.png';
import { NavLink } from 'react-router';
import { ChartLine, History, House } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="shadow-md bg-base-100">
      <nav className="container mx-auto flex justify-between items-center py-4 px-3">
        {/* Logo */}
        <img src={logoImg} alt="KeenKeeper" />

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden relative">
          {/* Button */}
          <div tabIndex={0} role="button" className="btn btn-ghost text-3xl">
            ☰
          </div>

          {/* Menu */}
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 z-[999]"
          >
            <li>
              <NavLink to="/" className="flex gap-2">
                <House /> Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/timeline" className="flex gap-2">
                <History /> Timeline
              </NavLink>
            </li>

            <li>
              <NavLink to="/stats" className="flex gap-2">
                <ChartLine /> Stats
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-semibold text-[#64748B]">
          <li>
            <NavLink to="/" className="flex gap-2">
              <House /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className="flex gap-2">
              <History /> Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to="/stats" className="flex gap-2">
              <ChartLine /> Stats
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
