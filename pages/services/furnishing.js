"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is loaded

const Furnishing = () => {
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

  const toggleDropdown = (setDropdown) => {
    setDropdown(prev => !prev);
  };

  // URLs for each category's images
  const images = {
    "Beds": [
      "/images/bed1.jpg", "/images/bed2.jpg", "/images/bed3.jpg", "/images/bed4.jpg",
      "/images/bed5.jpg", "/images/bed6.jpg", "/images/bed7.jpg", "/images/bed8.jpg",
      "/images/bed9.jpg", "/images/bed10.jpg", "/images/bed11.jpg", "/images/bed12.jpg"
    ],
    "Cabinets": [
      "/images/cabinets1.jpg", "/images/cabinets2.jpg", "/images/cabinets3.jpg", "/images/cabinets4.jpg",
      "/images/cabinets5.jpg", "/images/cabinets6.jpg", "/images/cabinets7.jpg", "/images/cabinets8.jpg",
      "/images/cabinets9.jpg", "/images/cabinets10.jpg", "/images/cabinets11.jpg", "/images/cabinets12.jpg"
    ],
    "Sofas": [
      "/images/sofa1.jpg", "/images/sofa2.jpg", "/images/sofa3.jpg", "/images/sofa4.jpg",
      "/images/sofa5.jpg", "/images/sofa6.jpg", "/images/sofa7.jpg", "/images/sofa8.jpg",
      "/images/sofa9.jpg", "/images/sofa10.jpg", "/images/sofa11.jpg", "/images/sofa12.jpg"
    ],
    "Dining Furniture": [
      "/images/diningf1.jpg", "/images/diningf2.jpg", "/images/diningf3.jpg", "/images/diningf4.jpg",
      "/images/diningf5.jpg", "/images/diningf6.jpg", "/images/diningf7.jpg", "/images/diningf8.jpg",
      "/images/diningf9.jpg", "/images/diningf10.jpg", "/images/diningf11.jpg", "/images/diningf12.jpg"
    ],
    "Desks and Tables": [
      "/images/desk1.jpg", "/images/desk2.jpg", "/images/desk3.jpg", "/images/desk4.jpg",
      "/images/desk5.jpg", "/images/desk6.jpg", "/images/desk7.jpg", "/images/desk8.jpg",
      "/images/desk9.jpg", "/images/desk10.jpg", "/images/desk11.jpg", "/images/desk12.jpg"
    ],
    "Recliners": [
      "/images/rec1.jpeg", "/images/rec2.jpeg", "/images/rec3.jpeg", "/images/rec4.jpeg",
      "/images/rec5.jpeg", "/images/rec6.jpeg", "/images/rec7.jpeg", "/images/rec8.jpeg",
      "/images/rec9.jpeg", "/images/rec10.jpeg", "/images/rec11.jpeg", "/images/rec12.jpeg"
    ],
    "Bench": [
      "/images/bench1.jpg", "/images/bench2.jpg", "/images/bench3.jpg", "/images/bench4.jpg",
      "/images/bench5.jpg", "/images/bench6.jpg", "/images/bench7.jpg", "/images/bench8.jpg",
      "/images/bench9.jpg", "/images/bench10.jpg", "/images/bench11.jpg", "/images/bench12.jpg"
    ],
    "Nightstands": [
      "/images/night1.jpg", "/images/night2.jpg", "/images/night3.jpg", "/images/night4.jpg",
      "/images/night5.jpg", "/images/night6.jpg", "/images/night7.jpg", "/images/night8.jpg",
      "/images/night9.jpg", "/images/night10.jpg", "/images/night11.jpg", "/images/night12.jpg"
    ],
    
    // Additional categories as needed...
  };

  const categories = Object.keys(images);

  // URLs for default images to display when no category is selected
  const defaultImages = [
    "/images/furniture1.jpg", "/images/furniture2.jpg", "/images/furniture3.jpg", "/images/furniture4.jpg",
    "/images/furniture5.jpg", "/images/furniture6.jpg", "/images/furniture7.jpg", "/images/furniture8.jpg",
    "/images/furniture9.jpg", "/images/furniture10.jpg", "/images/furniture11.jpg", "/images/furniture12.jpg"
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

          {/* Services Dropdown */}
          <div
            className="relative text-gray-800 hover:text-gray-900"
            onMouseEnter={!isMobileView ? () => setIsServicesOpen(true) : null}
            onMouseLeave={!isMobileView ? () => setIsServicesOpen(false) : null}
          >
            <span
              className="flex items-center cursor-pointer"
              onClick={isMobileView ? () => toggleDropdown(setIsServicesOpen) : null} // Toggle on mobile
            >
              Our Services
            </span>
            {isServicesOpen && (
              <div className={`absolute ${isMobileView ? 'left-0 mt-2 w-48' : 'top-full mt-2 w-56'} bg-white shadow-lg rounded-md z-20`}>
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
              onClick={isMobileView ? () => toggleDropdown(setIsPortfolioOpen) : null} // Toggle on mobile
            >
              Portfolio
            </span>
            {isPortfolioOpen && (
              <div className={`absolute ${isMobileView ? 'left-0 mt-2 w-48' : 'top-full mt-2 w-56'} bg-white shadow-lg rounded-md z-20`}>
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
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/furniture-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Furnitures</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
            We provide various types of customized furnitures to make your house or your workspace a perfect
            reflection of your personal style and ideas.
          </p>
        </div>
        
        {/* Breadcrumbs in Bottom-Left Corner */}
        <div className="absolute bottom-4 left-4 text-sm md:text-base text-gray-200 flex space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>~</span>
          <Link href="/services" className="hover:underline">Our services</Link>
          <span>~</span>
          <span>Furnishing</span>
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

export default Furnishing;
