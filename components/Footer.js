"use client";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8">
      <div className="container mx-auto px-4 lg:px-8 space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-start">
        
        {/* Left Section - Links */}
        <div className="flex-1 space-y-3 text-center lg:text-left">
          <ul className="text-gray-300 space-y-2">
            <li><a href="/" className="hover:text-gray-100 text-sm">Home</a></li>
            <li><a href="#about" className="hover:text-gray-100 text-sm">About Us</a></li>
            <li><a href="#projects" className="hover:text-gray-100 text-sm">Projects</a></li>
            <li><a href="#services" className="hover:text-gray-100 text-sm">Our Services</a></li>
            <li><a href="#portfolio" className="hover:text-gray-100 text-sm">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-gray-100 text-sm">Contact Us</a></li>
          </ul>
        </div>

        {/* Middle Section - Form */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <form className="space-y-4 max-w-[300px] w-full">
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              <input
                type="text"
                placeholder="Your Name..."
                className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm"
              />
              <input
                type="email"
                placeholder="Email ID: e.g. john@gmail.com"
                className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Mobile Number..."
              className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm"
            />
            <textarea
              placeholder="Message..."
              className="bg-gray-700 text-white px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#758F78] text-sm h-20"
            ></textarea>
            <button className="bg-[#758F78] text-white px-4 py-2 rounded-md hover:bg-[#5d7360] text-sm w-full sm:w-auto">
              Submit Query
            </button>
          </form>
        </div>

        {/* Right Section - Map */}
        <div className="flex-1 w-full h-full">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.93763370364!2d73.01588253931355!3d19.21833043476559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795504bf8f74f%3A0x2c3c4100a299bd18!2sThane%20-%20Dombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697027273535!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="rounded-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm">
        <p>Copyright Comfort Interiors | Developed by Domatrics Innovation Lab</p>
      </div>
    </footer>
  );
};

export default Footer;
