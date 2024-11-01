"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Desktop view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative bg-[#FDFBF6] pb-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 py-12 lg:px-6">
        
        {/* Background Image with Darkened Overlay */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
          <img
            src="/images/testimonial.png"
            alt="testimonial background"
            className="object-cover w-full h-full"
          />

          {/* Center-aligned Heading */}
          <div className="absolute z-20 top-0 w-full h-full px-6 lg:px-12 flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              What our Clients are Saying
            </h2>

            {/* Testimonial Slider */}
            <div className="w-full lg:w-3/4">
              <Slider {...settings}>
                {/* Slide 1 */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-[250px] h-[250px] flex flex-col justify-between items-center">
                    <p className="text-gray-900 text-center leading-snug font-medium text-sm">
                      "The team transformed our office into a vibrant and functional workspace that truly represents our brand. We've received countless compliments from clients and employees alike!"
                    </p>
                    <p className="text-right font-semibold text-gray-600 italic mt-4">~ Arif Khan</p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-[250px] h-[250px] flex flex-col justify-between items-center">
                    <p className="text-gray-900 text-center leading-snug font-medium text-sm">
                      "Our home renovation was handled with such professionalism and care. The upgrades have made a huge difference in our daily living, blending modern features with our original charm."
                    </p>
                    <p className="text-right font-semibold text-gray-600 italic mt-4">~ Priya Singh</p>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-[250px] h-[250px] flex flex-col justify-between items-center">
                    <p className="text-gray-900 text-center leading-snug font-medium text-sm">
                      "Excellent and Professional Work. The team at Comfort zone helped me to customize my house interior as per my requirement and did a fabulous job. A special mention to Mr. Pravin Kumar."
                    </p>
                    <p className="text-right font-semibold text-gray-600 italic mt-4">~ Anup Bannati</p>
                  </div>
                </div>

                {/* Slide 4 - Empty Card */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-[250px] h-[250px] flex items-center justify-center">
                    <p className="text-gray-300 text-center text-sm">More testimonials coming soon!</p>
                  </div>
                </div>

                {/* Slide 5 - Empty Card */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-[250px] h-[250px] flex items-center justify-center">
                    <p className="text-gray-300 text-center text-sm">Stay tuned for more feedback!</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
