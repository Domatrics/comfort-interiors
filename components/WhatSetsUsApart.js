"use client";

const WhatSetsUsApart = () => {
  return (
    <section className="bg-[#e2e0d6] py-12 px-6 sm:px-8 md:px-12 lg:px-20" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
      <div className="container mx-auto">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black mb-8 text-center sm:text-left">
          What Sets Us Apart
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Experienced Team */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">
              <img src="/icons/experienced-team.png" alt="Experienced Team" className="mx-auto h-16 w-16" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Experienced Team</h3>
            <p className="text-sm text-gray-600">
              Our skilled team brings years of expertise to every project, blending deep knowledge with creativity to make your vision a reality.
            </p>
          </div>

          {/* Budget Oriented */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">
              <img src="/icons/budget-oriented.png" alt="Budget Oriented" className="mx-auto h-16 w-16" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Budget Oriented</h3>
            <p className="text-sm text-gray-600">
              We maximize value with tailored solutions that fit your budget, ensuring high-quality results without overspending.
            </p>
          </div>

          {/* Free Consultation */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">
              <img src="/icons/free-consultation.png" alt="Free Consultation" className="mx-auto h-16 w-16" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Free Consultation</h3>
            <p className="text-sm text-gray-600">
              Get started with a no-cost consultation to discuss your ideas and receive expert advice, helping you make informed decisions.
            </p>
          </div>

          {/* Final Box - Hidden on Mobile */}
          <div className="hidden lg:flex text-center bg-white p-6 rounded-lg shadow-md items-center justify-center">
            <p className="text-sm text-gray-600">Additional content coming soon!</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
