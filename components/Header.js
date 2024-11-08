"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size to apply mobile or desktop view
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-[#FFFEF8] py-6 shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-end items-center px-4 lg:px-20">
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 hover:text-gray-900 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav 
          className={`lg:flex lg:space-x-8 text-[16px] lg:text-[18px] items-center absolute lg:static top-20 right-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform duration-300 ${
            isOpen ? 'flex flex-col space-y-4 p-4' : 'hidden lg:flex'
          }`}
        >
          <Link href="/" className="text-gray-800 hover:text-gray-900">
            Home
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-gray-900">
            About Us
          </Link>

          {/* Regular Projects Link (No Dropdown) */}
          <Link href="#projects" className="text-gray-800 hover:text-gray-900 flex items-center">
            Projects
          </Link>

          {/* Services Dropdown */}
          <div className="relative text-gray-800 hover:text-gray-900 cursor-pointer group">
            <span className="flex items-center">
              Our Services
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </span>
            <div className="absolute top-full hidden group-hover:block flex-col bg-white shadow-xl rounded-md w-56 min-w-max z-20">
              <div className='mt-2'>
              <Link href="/services/online-interior-designing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Online Interior Designing
              </Link>
              <Link href="/services/furnishing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Furnishing
              </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Dropdown */}
          <div className="relative text-gray-800 hover:text-gray-900 cursor-pointer group">
            <span className="flex items-center group">
              Portfolio
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </span>
            <div className="absolute top-full hidden group-hover:block flex-col bg-white shadow-xl rounded-md w-56 min-w-max z-20">
              <div className='mt-2'>
              <Link href="/portfolio/residential-interior-design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Residential Interior Design
              </Link>
              <Link href="/portfolio/commercial-interior-design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Commercial Interior Design
              </Link>
              </div>
            </div>
          </div>

          <Link href="#contact" className="ml-0 lg:ml-8 px-6 py-2 bg-[#758F78] hover:text-white text-white rounded-lg hover:scale-105 text-sm lg:text-[18px]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
