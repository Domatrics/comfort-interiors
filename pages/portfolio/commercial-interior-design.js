// pages/commercial-interior-design.js

"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is loaded
import FAB from "../../components/Fab";
import Header from "../../components/Header";
import Footer from '@/components/Footer';

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

  const toggleDropdown = (setDropdown) => {
    setDropdown(prev => !prev);
  };

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

      {/* Add Header component here */}
      <Header />

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
      {/* Add Footer component here */}
      <Footer />

      {/* Add FAB component here */}
      <FAB />
    </div>
  );
};

export default CommercialInteriorDesign;
