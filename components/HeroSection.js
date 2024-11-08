"use client";

const HeroSection = () => {
  return (
    <section className="md:h-[600px] lg:h-[700px] px-8 md:px-16 pt-28 lg:px-10 border-none shadow-none">
      {/* Container for the image and content */}
      <div className="relative w-full h-full max-w-7xl mx-auto bg-white border-none shadow-none">
        
        {/* Background Image with rounded corners */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: 'url(/images/hero-section.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-8 md:px-12 lg:px-6 pt-24 md:pt-28 lg:pt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug" >
            Transform Your Space into a <br /> Dream with Comfort Interiors
          </h1>
          <p className="mt-4 text-lg md:text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Expertly crafted designs for every Room!
          </p>
          <a
            href="#contact"
            className="mt-8 px-6 py-2 bg-[#FFFEF8] text-[#75877C] font-bold text-[18px] rounded-md hover:scale-105"
          >
            Schedule your free Consultation Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
