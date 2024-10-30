"use client";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 px-8 sm:px-10 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left text-black mb-8 sm:mb-10 md:mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Residential Designing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="w-full h-48 sm:h-60 lg:h-60 rounded-lg overflow-hidden">
              <img
                src="/images/residential-design.png"  
                alt="Residential Designing"
                className="w-full h-full object-cover rounded-xl md:rounded-lg"  // Rounded edges for mobile
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-black">
                Residential Designing
              </h3>
              <p className="text-sm text-black">
                From cozy apartments to sprawling homes, we create personalized interiors to match your style.
              </p>
            </div>
          </div>

          {/* Commercial Designing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="w-full h-48 sm:h-60 lg:h-60 rounded-lg overflow-hidden">
              <img
                src="/images/commercial-design.png"  
                alt="Commercial Designing"
                className="w-full h-full object-cover rounded-xl md:rounded-lg"  // Rounded edges for mobile
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-black">
                Commercial Designing
              </h3>
              <p className="text-sm text-black">
                From dynamic offices to inviting retail spaces, we design spaces that enhance functionality and reflect your brand’s identity.
              </p>
            </div>
          </div>

          {/* Renovations and Upgrades */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="w-full h-48 sm:h-60 lg:h-60 rounded-lg overflow-hidden">
              <img
                src="/images/renovations-upgrades.png"  
                alt="Renovations and Upgrades"
                className="w-full h-full object-cover rounded-xl md:rounded-lg"  // Rounded edges for mobile
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-black">
                Renovations and Upgrades
              </h3>
              <p className="text-sm text-black">
                Transform your existing space with our innovative renovation solutions, blending modern upgrades with timeless style.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
