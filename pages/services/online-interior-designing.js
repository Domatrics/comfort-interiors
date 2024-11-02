"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";

const OnlineInteriorDesigning = () => {
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
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_interior.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Online Interior Designing</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Experience the future of interior design from the comfort of your home. Our virtual design services bring your dream space to life, no matter where you are.
          </p>
        </div>

        <div className="absolute bottom-4 left-4 text-sm md:text-base text-gray-200 flex space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>~</span>
          <Link href="/online-interior-designing" className="hover:underline">Our Services</Link>
          <span>~</span>
          <span>Online Interior Designing</span>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            Our online interior design process is tailored to ensure that you get a customized, convenient, and professional interior design experience from the comfort of your home.
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="md:flex items-center md:space-x-10">
              <div className="md:w-1/2 text-left">
                <h3 className="text-[#758F78] font-semibold">Stage 1</h3>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Discuss Your Space</h3>
                <p className="text-gray-600 mb-4">
                  Connect with our <span className="font-semibold">expert consultant</span> via various telephonic methods available, or leave your query on our website. We will contact you at the earliest. Share your space through pictures and videos, floor plans, and discuss your <span className="font-semibold">requirements</span>.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img src="/images/discuss_space.png" alt="Discuss Your Space" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:flex items-center md:space-x-10 md:flex-row-reverse">
              <div className="md:w-1/2 text-left">
                <h3 className="text-[#758F78] font-semibold">Stage 2</h3>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Paired with a Designer</h3>
                <p className="text-gray-600 mb-4">
                  Once aboard, you will be paired with a <span className="font-semibold">dedicated interior designer</span>, who will coordinate with you throughout the project. The designer will have brainstorming sessions to understand your taste, budget, and family structure for customizing the design.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img src="/images/paired_designer.png" alt="Get Paired with a Designer" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:flex items-center md:space-x-10">
              <div className="md:w-1/2 text-left">
                <h3 className="text-[#758F78] font-semibold">Stage 3</h3>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Co-Create the Designs</h3>
                <p className="text-gray-600 mb-4">
                  The designer will create an initial concept of space planning and furniture layout according to <span className="font-semibold">Vastu</span>. Modifications will be made until you are satisfied. Exclusive 3D Interiors will be designed based on the selected <span className="font-semibold">budget</span>, <span className="font-semibold">layout</span>, and <span className="font-semibold">theme</span>. 
                  <br />
                  These 3D designs will showcase ceiling designs, flooring, color schemes, and more. Any required changes will be made to ensure complete satisfaction.
                  <br />
                  Once finalized, the designer will provide <span className="font-semibold">work drawings</span> with <span className="font-semibold">material specifications</span> and measurements.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img src="/images/co_create.png" alt="Co-Create the Designs" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="md:flex items-center md:space-x-10 md:flex-row-reverse">
              <div className="md:w-1/2 text-left">
                <h3 className="text-[#758F78] font-semibold">Stage 4</h3>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Execution Support</h3>
                <p className="text-gray-600 mb-4">
                  Receive telephonic support from your designer during the execution phase, ensuring that your vision comes to life seamlessly.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img src="/images/execution_support.png" alt="Execution Support" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-[#758F78] text-sm uppercase font-semibold">Projects</h3>
        <h2 className="text-3xl font-bold text-gray-800">Recent <span className="font-normal">Work</span></h2>
      </div>
      <a href="#explore-more" className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center">
        Explore More <span className="ml-2 transform">→</span>
      </a>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Project Card 1 */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img src="/images/project1.jpg" alt="Project Image 1" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <span className="text-white text-3xl font-bold">→</span>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img src="/images/project2.jpg" alt="Project Image 2" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <span className="text-white text-3xl font-bold">→</span>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img src="/images/project3.jpg" alt="Project Image 3" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <span className="text-white text-3xl font-bold">→</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-8">
      <h3 className="text-[#758F78] text-sm uppercase font-semibold">Featuring</h3>
      <h2 className="text-3xl font-bold text-gray-800">Our Portfolio</h2>
    </div>

    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Residential Interior Designing */}
      <a href="/portfolio/residential-interior-design" className="block relative rounded-lg overflow-hidden shadow-lg group">
        <img src="/images/hero_interior.png" alt="Residential Interior Designing" className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 px-4 py-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Residential Interior Designing</h3>
          <p className="text-sm text-gray-600 font-medium flex items-center justify-center">
            Explore More <span className="ml-2">→</span>
          </p>
        </div>
      </a>

      {/* Commercial Interior Designing */}
      <a href="/portfolio/commercial-interior-design" className="block relative rounded-lg overflow-hidden shadow-lg group">
        <img src="/images/herocommercial.jpg" alt="Commercial Interior Designing" className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 px-4 py-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Commercial Interior Designing</h3>
          <p className="text-sm text-gray-600 font-medium flex items-center justify-center">
            Explore More <span className="ml-2">→</span>
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

{/* Footer */}
      <footer className="bg-[#222222] text-white py-8">
        <div className="container mx-auto px-4 lg:px-8 space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-start">
          
          {/* Left Section - Links */}
          <div className="flex-1 space-y-3 text-center lg:text-left">
            <ul className="text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-gray-100 text-sm">Home</a></li>
              <li><a href="#about" className="hover:text-gray-100 text-sm">About Us</a></li>
              <li><a href="#projects" className="hover:text-gray-100 text-sm">Projects</a></li>
              <li><a href="#services" className="hover:text-gray-100 text-sm">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-gray-100 text-sm">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-gray-100 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Middle Section - Form */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <form className="space-y-4 max-w-[300px] w-full">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm"
                />
                <input
                  type="email"
                  placeholder="Email ID: e.g. john@gmail.com"
                  className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Mobile Number..."
                className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm"
              />
              <textarea
                placeholder="Message..."
                className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm h-20"
              ></textarea>
              <button className="bg-[#758F78] text-white px-4 py-2 rounded-md hover:bg-[#5d7360] text-sm w-full sm:w-auto">
                Submit Query
              </button>
            </form>
          </div>

          {/* Right Section - Map */}
          <div className="flex-1 w-full h-full">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.93763370364!2d73.01588253931355!3d19.21833043476559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795504bf8f74f%3A0x2c3c4100a299bd18!2sThane%20-%20Dombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697027273535!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="rounded-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm">
          <p>Copyright Comfort Interiors | Developed by Domatrics Innovation Lab</p>
        </div>
      </footer>


    </div>
  );
};

export default OnlineInteriorDesigning;
