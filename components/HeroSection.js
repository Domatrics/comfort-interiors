"use client";

const HeroSection = () => {
  return (
    <section className="md:h-[600px] lg:h-[700px] px-4 md:px-16 pt-24 lg:px-10 border-none shadow-none">
      {/* Container for the image and content */}
      <div className="relative w-full h-full max-w-7xl mx-auto border-none shadow-none py-32">
        
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
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 md:px-12 lg:px-6 pt-24 md:pt-28 lg:pt-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl md:leading-[60px] font-bold" >
            Transform Your Space into a <span className="md:inline-block">Dream with Comfort Interiors</span> 
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Expertly crafted designs for every Room!
          </p>
          <a
            href="#contact"
            className="mt-8 md:px-6 px-4 py-2 bg-[#FFFEF8] text-[#75877C] font-bold md:text-[18px] rounded-md hover:scale-105"
          >
            Schedule a Free Consultation!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
