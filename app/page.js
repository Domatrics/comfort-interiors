"use client"; // Ensures client-side functionality

import Header from '../components/Header';  // Importing with default exports
import HeroSection from '../components/HeroSection';  // Importing with default exports
import ServicesSection from '../components/ServicesSection';  // Importing with default exports
import Footer from '../components/Footer';  // Importing with default exports
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/ProjectsSection';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import TestimonialSection from '../components/TestimonialSection';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <CallToActionSection />
      <ProjectsSection />
      <WhatSetsUsApart />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
