"use client";
import React from "react";

const FAB = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-50">
      <a
        href="mailto:your-email@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex justify-center items-center bg-[#F0E6D5] hover:bg-[#D9C4A5] rounded-md shadow-lg mb-3 border border-[#D0B17D]"
      >
        <img src="/icons/email-icon.png" alt="Email" className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/your-phone-number"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex justify-center items-center bg-[#25D366]/30 hover:bg-[#128C7E] rounded-md shadow-lg mb-3"
      >
        <img
          src="/icons/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
      <a
        href="tel:+your-phone-number"
        className="w-12 h-12 flex justify-center items-center bg-[#FF5C5C]/30 hover:bg-[#E03B3B] rounded-md shadow-lg"
      >
        <img src="/icons/phone-icon.png" alt="Phone" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FAB;
