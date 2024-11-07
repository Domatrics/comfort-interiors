"use client";

const CallToActionSection = () => {
  return (
    <section className="bg-white py-4"> {/* Reduced top padding */}
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        
        {/* Left Image Section */}
        <div className="h-full overflow-hidden">
          <img
            src="/images/call-to-action.png" 
            alt="Budget Aapka, Kaam Humara"
            className="w-full h-full object-cover object-left"  
          />
        </div>
        
        {/* Right Text Section */}
        <div className="bg-[#F0E6D5] py-4 flex items-center justify-center w-full"> {/* Darkened the cream background */}
          <div className="text-center w-full" style={{ fontFamily: 'Comfortaa, sans-serif' }}> {/* Ensures content stays centered */}
            <h3 className="text-3xl font text-black mb-4">
              <span class ="font-bold">Budget</span>  Aapka, <span class = "font-bold">Kaam</span> Humara<br /> <span class = "font-bold">Tareef</span> Aapki!
            </h3>
            <button className="mt-4 px-6 py-3 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] transition-all duration-300">
              Discuss with an Expert
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CallToActionSection;
