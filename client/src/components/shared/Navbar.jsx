/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import logo from '../../assets/Shared/logoBlack.png'

function Navbar() {
  let Links = [
    { name: "BASE", link: "/" },
    { name: "WE/US", link: "/about" },
    { name: "SERVICE", link: "/service" },
    { name: "SHOWCASE", link: "/showcase" },
    { name: "BLOGS", link: "/blogs" },
  ];
  let [open, setOpen] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (open) {
      // Disable scrolling
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }

    // Cleanup effect
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <div className='w-full  top-0 left-0 z-30 font-mont'>
      <div className='lg:flex items-center justify-between  py-4 md:px-16 px-7'>
        <div className='font-bold text-2xl flex justify-start items-center gap-1 w-[20%]' onClick={() => navigate('/')}>
          <img src={logo} alt="" className='w-[70%] lg:w-[20%]' />
          <h5 className='hidden lg:block'>THINKING DOTS</h5>
        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* linke items */}
        <div className='flex justify-center'>
          <ul className={`flex flex-col gap-16  lg:flex-row items-center justify-center lg:justify-start lg:pb-0 pb-12 absolute lg:static lg:z-auto left-0 w-full lg:w-auto  transition-all duration-500 z-[-1] ease-in-out  ${open ? ' top-0 gap-10 text-2xl md:text-4xl h-screen bg-white' : 'top-[-550px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className={`hover:text-[#EAB600]  font-bold duration-500`}>{link.name}</a>
                </li>))
            }
            <div className='flex gap-5 mt-10 text-4xl  lg:hidden'>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300 transition ease-in-out duration-300'>
                <FaFacebook />
              </span>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300  transition ease-in-out duration-300'>
                <BiLogoInstagramAlt />
              </span>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300 transition ease-in-out duration-300'>
                <FaLinkedinIn />
              </span></div>
          </ul>
        </div>
        <div className='hidden gap-5 text-2xl w-[20%] justify-end lg:flex'>
          <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaYoutube /></a>
          <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaFacebookF /></a>
          <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar