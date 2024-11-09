"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#181D1A] text-white p-[56px]">
      <div className="container mx-auto lg:px-8 space-y-8 lg:space-y-0 lg:flex justify-between items-start">
        
        {/* Left Section - Links */}
        <div className="flex-1 space-y-3 text-center lg:text-left">
          <ul className="text-white space-y-[16px] text-[14px]">
            <li><a href="/" className="hover:text-gray-100">Home</a></li>
            <li><a href="#about" className="hover:text-gray-100">About Us</a></li>
            <li><a href="#projects" className="hover:text-gray-100">Projects</a></li>
            <li><a href="#services" className="hover:text-gray-100">Our Services</a></li>
            <li><a href="#portfolio" className="hover:text-gray-100">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-gray-100">Contact Us</a></li>
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
      <div className="md:text-[14px] text-[12px] mt-10 md:flex">
        <div className="mx-auto md:flex text-center">
          <div>
          <span className="mr-1">&copy;</span>
          <span className="mr-2">ComfortZone 2024 | Developed by</span>
          </div>
          <div className="">
            <Link href="https://domatrics.com" legacyBehavior passHref>
              <span className="flex items-center cursor-pointer hover:scale-105 transition-all">
                <svg
                  className="mr-1"
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.98666 18.4604L0.0257124 13.8342L0 4.62622L7.96095 9.25246L7.98666 18.4604Z"
                    fill="#131315"
                  />
                  <path
                    d="M7.98666 18.4594L0.0257133 13.8332L0 4.62622L7.96095 9.25246L7.98666 18.4594Z"
                    fill="#131315"
                  />
                  <path
                    d="M4.94966 12.4477C4.25741 12.0432 3.68777 11.0632 3.68481 10.2602C3.68185 9.45717 4.24555 9.1328 4.94176 9.53728C5.63797 9.94176 6.20363 10.9218 6.20561 11.7248C6.20759 12.5278 5.64587 12.8522 4.94966 12.4477ZM4.53134 8.19528L1.46564 6.41519C1.3964 6.3724 1.31888 6.34479 1.23818 6.33412C1.17558 6.32566 1.11195 6.33818 1.05721 6.36971C1.0033 6.40363 0.961171 6.45336 0.936565 6.51211C0.905676 6.58522 0.891156 6.66422 0.894035 6.74354L0.910851 12.6643C0.911403 12.7619 0.926394 12.8589 0.955348 12.9521C0.984027 13.0499 1.02454 13.1439 1.076 13.232C1.12684 13.3202 1.18793 13.4022 1.25797 13.4762C1.32453 13.5479 1.40115 13.6095 1.48542 13.6592L4.55113 15.4393C4.86955 15.6369 5.22545 15.7666 5.59643 15.82C5.88111 15.861 6.17144 15.8101 6.42515 15.6746C6.67124 15.5261 6.86271 15.302 6.97105 15.0358C7.11377 14.6862 7.18117 14.3105 7.16884 13.9331V12.7464C7.16502 12.2956 7.09675 11.8477 6.9661 11.4163C6.83361 10.9696 6.64837 10.5404 6.41429 10.1376C6.18155 9.7355 5.90203 9.36239 5.58161 9.026C5.27459 8.69914 4.92222 8.41806 4.5353 8.19134"
                    fill="#4D61F4"
                  />
                  <path
                    d="M7.96095 9.25249L0 4.62625L8.01237 0L15.9733 4.62625L7.96095 9.25249Z"
                    fill="#131315"
                  />
                  <path
                    d="M7.96095 9.25249L0 4.62625L8.01237 0L15.9733 4.62625L7.96095 9.25249Z"
                    fill="#131315"
                  />
                  <path
                    d="M7.96095 9.25249L0 4.62625L8.01237 0L15.9733 4.62625L7.96095 9.25249Z"
                    fill="#39393A"
                  />
                  <path
                    d="M13.8451 4.16041L8.68088 1.18667C8.45681 1.06718 8.20592 1.00693 7.95204 1.01163C7.69761 1.00677 7.44612 1.06666 7.22121 1.18568L5.86735 1.97682C5.85502 1.98138 5.84437 1.98959 5.83683 2.00038C5.82931 2.01117 5.82527 2.02399 5.82527 2.03714C5.82527 2.0503 5.82931 2.06314 5.83683 2.07393C5.84437 2.08472 5.85502 2.09293 5.86735 2.09747L8.37134 3.55319C8.46429 3.60659 8.39805 3.69857 8.27244 3.69857H2.98559C2.94913 3.69784 2.91305 3.70634 2.88077 3.72328L2.0896 4.18612C2.00168 4.2355 1.92519 4.3029 1.86513 4.38392C1.81537 4.45022 1.78769 4.53044 1.78601 4.61332C1.787 4.69586 1.81438 4.77591 1.86414 4.84177C1.92309 4.92306 1.99901 4.99055 2.08666 5.03957L2.87781 5.49647C2.90829 5.51256 2.94223 5.52104 2.9767 5.5212H8.21806C8.25423 5.52029 8.29002 5.52881 8.3219 5.54591C8.3753 5.57658 8.3842 5.62998 8.3219 5.66655L5.85548 7.09063C5.84314 7.09516 5.8325 7.10338 5.82496 7.11416C5.81745 7.12495 5.81341 7.1378 5.81341 7.15095C5.81341 7.1641 5.81745 7.17695 5.82496 7.18774C5.8325 7.1985 5.84314 7.20672 5.85548 7.21127L7.24 8.00934C7.46387 8.12947 7.71484 8.19008 7.96884 8.18537C8.22337 8.19006 8.47489 8.12982 8.69966 8.01034L13.8421 5.01682C14.0399 4.90508 14.1457 4.75278 14.1457 4.59454C14.1457 4.43632 14.0379 4.28402 13.8491 4.17127"
                    fill="#D7FF7B"
                  />
                  <path
                    d="M15.9733 4.62622L16 13.8342L7.98665 18.4604L7.96094 9.25246L15.9733 4.62622Z"
                    fill="#2F2F31"
                  />
                  <path
                    d="M15.9733 4.62622L16 13.8342L7.98665 18.4594L7.96094 9.25246L15.9733 4.62622Z"
                    fill="#262628"
                  />
                  <path
                    d="M10.3899 8.78978L9.48699 9.31096C9.0914 9.54137 8.76605 10.0942 8.76803 10.5461L8.76111 16.3383C8.76111 16.7903 9.08646 16.9703 9.48501 16.7399L10.286 16.281C10.3941 16.2083 10.491 16.1204 10.5738 16.0199C10.6468 15.9349 10.7102 15.842 10.7627 15.743C10.8545 15.5812 10.9155 15.4039 10.9427 15.2199V13.5891C10.9981 13.9461 11.2938 14.0697 11.6349 13.8789C11.7833 13.7968 11.9316 13.7137 12.08 13.6277C12.1835 13.5683 12.2873 13.507 12.3915 13.4437C12.5813 13.3229 12.7438 13.1637 12.8684 12.9763C12.9931 12.789 13.0772 12.5777 13.1154 12.3559V13.9896C13.1698 14.3219 13.4338 14.4445 13.7513 14.2982L14.576 13.8265C14.9716 13.597 15.297 13.0432 15.296 12.5913L15.3029 6.80005C15.3029 6.34711 14.9776 6.16712 14.579 6.39755L13.6524 6.93256C12.8177 7.41515 12.1294 8.52179 12.0295 9.49589C11.9306 8.62069 11.2384 8.30025 10.3948 8.78682"
                    fill="#CC88FF"
                  />
                </svg>
                <span className="hover:text-secondary">Domatrics Innovations Lab</span>
              </span>
            </Link>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
