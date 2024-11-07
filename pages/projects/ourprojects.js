"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is loaded
import FAB from '../../components/Fab'; // Import the FAB component
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component
import ProjectsSection from '../../components/ProjectsSection'; // Import the ProjectsSection component

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

  

  // Show more or less images logic
  const showMoreImages = () => setVisibleImages(visibleImages + 4);
  const showLessImages = () => setVisibleImages(4);

  // Function to handle full-screen view
  const openFullScreen = (image) => setFullScreenImage(image);
  const closeFullScreen = () => setFullScreenImage(null);

  return (
    <div>
       {/* Navbar */}
      {/* Add Header component here */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/furniture-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Our Projects</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
            These are some of the projects we have worked on. Click on any project to view more details.
          </p>
        </div>
        
        {/* Breadcrumbs in Bottom-Left Corner */}
        <div className="absolute bottom-4 left-4 text-sm md:text-base text-gray-200 flex space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>~</span>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <span>~</span>
          <span>Our Projects</span>
        </div>
      </section>

        {/* Add Footer component here */}
      <ProjectsSection />
      
     
      {/* Add Footer component here */}
      <Footer />

      {/* Add FAB component here */}
      <FAB />
    </div>
  );
};

export default Furnishing;
