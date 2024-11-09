"use client";

const CallToActionSection = () => {
  return (
    <section className="bg-white py-4">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="h-full overflow-hidden">
          <img
            src="/images/cta.jpg"
            alt="Budget Aapka, Kaam Humara"
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="bg-[#F0E6D5] md:py-4 py-12 flex flex-col items-center mx-auto justify-center w-full">
          <div className="text-center">
            <h3 className="text-3xl font text-black mb-4 md:text-left">
              <span className="font-bold">Budget</span> Aapka,{" "}
              <span className="font-bold">Kaam</span> Humara
              <br />
              <span className="font-bold">Tareef</span> Aapki!
            </h3>
          <div className="w-full flex justify-center md:justify-start mt-4">
            <button className="px-6 py-2 bg-[#75877C] text-white rounded-lg hover:bg-[#5d7360] transition-all duration-300">
              Discuss with an Expert
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
