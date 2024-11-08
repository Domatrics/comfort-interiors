"use client";
import React from "react";

const ServicesSection = () => {
  const Data = [
    {
      title: "Residential Designing",
      desc: "From cozy apartments to sprawling homes, we create personalized interiors to match your style.",
      src: "/images/residential-design.png",
      alt: "Residential Designing",
    },
    {
      title: "Commercial Designing",
      desc: " From dynamic offices to inviting retail spaces, we design spaces that enhance functionality and reflect your brand’s identity.",
      src: "/images/commercial-design.png",
      alt: "Commercial Designing",
    },
    {
      title: "Renovations and Upgrades",
      desc: "Transform your existing space with our innovative renovation solutions, blending modern upgrades with timeless style.",
      src: "/images/renovations-upgrades.png",
      alt: "Renovations and Upgrades",
    },
  ];
  return (
    <section
      id="services"
      className="py-12 px-8 sm:px-10 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="md:text-[32px] text-[24px] font-semibold text-center lg:text-left text-black mb-6"
          style={{ fontFamily: "Comfortaa, sans-serif" }}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {Data.map((d, i) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 sm:h-60 lg:h-60 rounded-lg overflow-hidden">
                <img
                  src={d.src}
                  alt={d.alt}
                  className="w-full h-full object-cover rounded-xl md:rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3
                  className="text-base text-[24px] font-semibold mb-2 text-black"
                  style={{ fontFamily: "Comfortaa, sans-serif" }}
                >
                  {d.title}
                </h3>
                <p className="mt-2 font-montserrat text-[16px] text-black">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
