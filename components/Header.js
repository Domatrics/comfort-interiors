"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-6 shadow-md z-50 fixed top-0 left-0 w-full">
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
          className={`lg:flex lg:space-x-8 text-sm lg:text-base items-center absolute lg:static top-20 right-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform duration-300 ${
            isOpen ? 'flex flex-col space-y-4 p-4' : 'hidden lg:flex'
          }`}
        >
          <Link href="/" className="text-gray-800 hover:text-gray-900">
            Home
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-gray-900">
            About Us
          </Link>
          <Link href="#projects" className="text-gray-800 hover:text-gray-900">
            Projects
          </Link>
          <Link href="#services" className="text-gray-800 hover:text-gray-900">
            Our Services
          </Link>
          <Link href="#portfolio" className="text-gray-800 hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="#contact" className="ml-0 lg:ml-8 px-6 py-2 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] text-sm lg:text-base">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
