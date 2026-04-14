import React from 'react';
import footerImg from "../../assets/logo-xl.png"
import insta from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import xlogo from '../../assets/twitter.png';

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white">
      <div className="container mx-auto text-center py-[80px]">
        <div>
          <img className="mx-auto mb-4" src={footerImg} alt="" />
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div>
            <p className="text-xl font-bold mt-4">Social Links</p>
            <div className="flex justify-center items-center gap-3 my-4">
              <img src={insta} alt="" />
              <img src={facebook} alt="" />
              <img src={xlogo} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[#FAFAFA] border-t border-gray-600 py-8">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex justify-between items-center gap-6">
            <li>Privacy Policy</li>
            <li>Terms of Service </li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;