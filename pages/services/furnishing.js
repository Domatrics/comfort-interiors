"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is loaded

const Furnishing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size to apply mobile or desktop view
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1024); // Mobile view if screen width <= 1024px
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
       {/* Navbar */}
      <header className="bg-white py-6 shadow-md z-50 fixed top-0 left-0 w-full">
        <div className="container mx-auto flex justify-end items-center px-4 lg:px-20">
          <button
            className="lg:hidden text-gray-800 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

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

            {/* Services Dropdown */}
            <div
              className="relative text-gray-800 hover:text-gray-900"
              onMouseEnter={!isMobileView ? () => setIsServicesOpen(true) : null}
              onMouseLeave={!isMobileView ? () => setIsServicesOpen(false) : null}
            >
              <span
                className="flex items-center cursor-pointer"
                onClick={isMobileView ? () => setIsServicesOpen(!isServicesOpen) : null} // Toggle on mobile
              >
                Our Services
              </span>
              {isServicesOpen && (
                <div className={`absolute ${isMobileView ? 'left-0 mt-2 w-48' : 'top-full mt-2 w-48'} bg-white shadow-lg rounded-md z-20`}>
                  <Link href="/services/online-interior-designing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Online Interior Designing
                  </Link>
                  <Link href="/services/furnishing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Furnishing
                  </Link>
                </div>
              )}
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative text-gray-800 hover:text-gray-900"
              onMouseEnter={!isMobileView ? () => setIsPortfolioOpen(true) : null}
              onMouseLeave={!isMobileView ? () => setIsPortfolioOpen(false) : null}
            >
              <span
                className="flex items-center cursor-pointer"
                onClick={isMobileView ? () => setIsPortfolioOpen(!isPortfolioOpen) : null} // Toggle on mobile
              >
                Portfolio
              </span>
              {isPortfolioOpen && (
                <div className={`absolute ${isMobileView ? 'left-0 mt-2 w-48' : 'top-full mt-2 w-48'} bg-white shadow-lg rounded-md z-20`}>
                  <Link href="/portfolio/residential-interior-design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Residential Interior Design
                  </Link>
                  <Link href="/portfolio/commercial-interior-design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Commercial Interior Design
                  </Link>
                </div>
              )}
            </div>

            <Link href="#contact" className="ml-0 lg:ml-8 px-6 py-2 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] text-sm lg:text-base">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: "url('/images/hero_interior.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Online Interior Designing</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Experience the future of interior design from the comfort of your home. Our virtual design services bring your dream space to life, no matter where you are.
          </p>
        </div>

        {/* Breadcrumbs in Bottom-Left Corner */}
        <div className="absolute bottom-4 left-4 text-sm md:text-base text-gray-200 flex space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>~</span>
          <span>Online Interior Designing</span>
        </div>
      </section>
    </div>
  );
};


<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">Our online interior design process is tailored to ensure that you get a customized, convenient, and professional interior design experience from the comfort of your home.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Step 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#758F78] mb-4">1. Discuss Your Space</h3>
        <p className="text-gray-600 mb-4">Connect with our expert consultants and share details of your space, including pictures and floor plans. Our team is ready to discuss your preferences and requirements.</p>
        <span className="block w-12 h-1 bg-[#758F78] mx-auto mb-4"></span>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#758F78] mb-4">2. Get Paired with a Designer</h3>
        <p className="text-gray-600 mb-4">A dedicated designer will be assigned to you, ready to brainstorm and create a space tailored to your lifestyle, budget, and taste. </p>
        <span className="block w-12 h-1 bg-[#758F78] mx-auto mb-4"></span>
      </div>

      {/* Step 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#758F78] mb-4">3. Co-Create the Designs</h3>
        <p className="text-gray-600 mb-4">Work collaboratively to finalize a layout, theme, and exclusive 3D designs, covering everything from ceiling designs to furniture layouts.</p>
        <span className="block w-12 h-1 bg-[#758F78] mx-auto mb-4"></span>
      </div>

      {/* Step 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#758F78] mb-4">4. Execution Support</h3>
        <p className="text-gray-600 mb-4">Get telephonic support from your designer during the execution phase, ensuring your vision comes to life seamlessly.</p>
        <span className="block w-12 h-1 bg-[#758F78] mx-auto mb-4"></span>
      </div>
    </div>
  </div>
</section>


export default Furnishing;
