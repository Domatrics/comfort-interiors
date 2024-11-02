// pages/commercial-interior-design.js

"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is loaded

const CommercialInteriorDesign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleImages, setVisibleImages] = useState(4); // Number of images initially visible for mobile view
  const [isMobileView, setIsMobileView] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null); // State to store the image URL for full-screen view

  // Detect if the screen is in mobile view
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 640); // Mobile view if screen width <= 640px
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // URLs for each category's images
  const images = {
    "Salon/Parlor Interiors": [
      "/images/salon1.jpg", "/images/salon2.jpg", "/images/salon3.jpg", "/images/salon4.jpg",
      "/images/salon5.jpg", "/images/salon6.jpg", "/images/salon7.jpg", "/images/salon8.jpg",
      "/images/salon9.jpg", "/images/salon10.jpg", "/images/salon11.jpg", "/images/salon12.jpg"
    ],
    "GYM/YOGA Center Interiors": [
      "/images/gym1.jpg", "/images/gym2.jpg", "/images/gym3.jpg", "/images/gym4.jpg",
      "/images/gym5.jpg", "/images/gym6.jpg", "/images/gym7.jpg", "/images/gym8.jpg",
      "/images/gym9.jpg", "/images/gym10.jpg", "/images/gym11.jpg", "/images/gym12.jpg"
    ],
    "School/College Interiors": [
      "/images/school1.jpg", "/images/school2.jpg", "/images/school3.jpg", "/images/school4.jpg",
      "/images/school5.jpg", "/images/school6.jpg", "/images/school7.jpg", "/images/school8.jpg",
      "/images/school9.jpg", "/images/school10.jpg", "/images/school11.jpg", "/images/school12.jpg"
    ],
    "Hospital/Clinic Interiors": [
      "/images/hospital1.jpg", "/images/hospital2.jpg", "/images/hospital3.jpg", "/images/hospital4.jpg",
      "/images/hospital5.jpg", "/images/hospital6.jpg", "/images/hospital7.jpg", "/images/hospital8.jpg",
      "/images/hospital9.jpg", "/images/hospital10.jpg", "/images/hospital11.jpg", "/images/hospital12.jpg"
    ],
    "Showroom Interiors": [
      "/images/showroom1.jpg", "/images/showroom2.jpg", "/images/showroom3.jpg", "/images/showroom4.jpg",
      "/images/showroom5.jpg", "/images/showroom6.jpg", "/images/showroom7.jpg", "/images/showroom8.jpg",
      "/images/showroom9.jpg", "/images/showroom10.jpg", "/images/showroom11.jpg", "/images/showroom12.jpg"
    ],
    "Restaurant Interiors": [
      "/images/restaurant1.jpg", "/images/restaurant2.jpg", "/images/restaurant3.jpg", "/images/restaurant4.jpg",
      "/images/restaurant5.jpg", "/images/restaurant6.jpg", "/images/restaurant7.jpg", "/images/restaurant8.jpg",
      "/images/restaurant9.jpg", "/images/restaurant10.jpg", "/images/restaurant11.jpg", "/images/restaurant12.jpg"
    ],
    "Hotel Interiors": [
      "/images/hotel1.jpg", "/images/hotel2.jpg", "/images/hotel3.jpg", "/images/hotel4.jpg",
      "/images/hotel5.jpg", "/images/hotel6.jpg", "/images/hotel7.jpg", "/images/hotel8.jpg",
      "/images/hotel9.jpg", "/images/hotel10.jpg", "/images/hotel11.jpg", "/images/hotel12.jpg"
    ],
    "Office Interiors": [
      "/images/office1.jpg", "/images/office2.jpg", "/images/office3.jpg", "/images/office4.jpg",
      "/images/office5.jpg", "/images/office6.jpg", "/images/office7.jpg", "/images/office8.jpg",
      "/images/office9.jpg", "/images/office10.jpg", "/images/office11.jpg", "/images/office12.jpg"
    ],
    
    // Additional categories as needed...
  };

  const categories = Object.keys(images);

  // URLs for default images to display when no category is selected
  const defaultImages = [
    "/images/commercialdefault1.jpg", "/images/commercialdefault2.jpg", "/images/commercialdefault3.jpg", "/images/commercialdefault4.jpg",
    "/images/commercialdefault5.jpg", "/images/commercialdefault6.jpg", "/images/commercialdefault7.jpg", "/images/commercialdefault8.jpg",
    "/images/commercialdefault9.jpg", "/images/commercialdefault10.jpg", "/images/commercialdefault11.jpg", "/images/commercialdefault12.jpg"
  ];

  // Show more or less images logic
  const showMoreImages = () => setVisibleImages(visibleImages + 4);
  const showLessImages = () => setVisibleImages(4);

  // Function to handle full-screen view
  const openFullScreen = (image) => setFullScreenImage(image);
  const closeFullScreen = () => setFullScreenImage(null);

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
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/herocommercial.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Commercial Interior Designing</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
            We provide customized commercial interior design solutions to make your workspace a perfect
            reflection of your personal style and ideas.
          </p>
        </div>
        
        {/* Breadcrumbs in Bottom-Left Corner */}
        <div className="absolute bottom-4 left-4 text-sm md:text-base text-gray-200 flex space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>~</span>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <span>~</span>
          <span>Commercial Interior Designing</span>
        </div>
      </section>

      {/* Category Links or Back Button */}
      <div className="container mx-auto py-8 px-4">
        {selectedCategory ? (
          <div className="flex items-center mb-4">
            <button className="text-gray-800 font-semibold px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition" onClick={() => { setSelectedCategory(null); setVisibleImages(4); }}>
              ← Back
            </button>
            <h2 className="text-gray-800 font-bold text-2xl mx-auto text-center">{selectedCategory}</h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap justify-center gap-x-4 gap-y-2 text-center text-sm lg:text-base">
            {categories.map((category) => (
              <button key={category} className="px-2 py-1 font-semibold text-gray-800 hover:text-red-600 transition" onClick={() => setSelectedCategory(category)}>
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Image Modal */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full rounded-md" />
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none"
          >
            ✕
          </button>
        </div>
      )}

      {/* Image Display */}
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(selectedCategory ? images[selectedCategory] : defaultImages)
          .slice(0, isMobileView ? visibleImages : (selectedCategory ? images[selectedCategory].length : defaultImages.length))
          .map((image, index) => (
            <div
              key={index}
              className="relative w-full h-48 bg-cover bg-center rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => openFullScreen(image)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity duration-300">
                View Full Screen
              </div>
            </div>
          ))}
      </div>


      {/* Show More / Show Less Buttons for Default Images */}
      {!selectedCategory && isMobileView && (
        <div className="text-center mt-4 mb-6">
          {visibleImages < defaultImages.length && (
            <button className="px-6 py-2 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] text-sm lg:text-base mr-2" onClick={showMoreImages}>
              Show More
            </button>
          )}
          {visibleImages > 4 && (
            <button className="px-6 py-2 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] text-sm lg:text-base mt-2" onClick={showLessImages}>
              Show Less
            </button>
          )}
        </div>
      )}

      {/* Show More / Show Less Buttons for Category-Specific Images */}
      {selectedCategory && isMobileView && (
        <div className="text-center mt-4 mb-6">
          {visibleImages < images[selectedCategory].length && (
            <button className="px-6 py-2 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] text-sm lg:text-base mr-2" onClick={showMoreImages}>
              Show More
            </button>
          )}
          {visibleImages > 4 && (
            <button className="px-6 py-2 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] text-sm lg:text-base" onClick={showLessImages}>
              Show Less
            </button>
          )}
        </div>
      )}
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

export default CommercialInteriorDesign;
