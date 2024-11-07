"use client";
import React, { useState } from "react";

const FAB = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-50">
      {/* Arrow Button (Always Visible) */}
      <div
        onClick={toggleExpand}
        className="w-12 h-16 flex items-center justify-center bg cursor-pointer rounded-t-md"
      >
        <img
          src={isExpanded ? "/icons/arrow-icon.png" : "/icons/arrow-icon.png"} // Replace with actual path
          alt="Toggle FAB"
          className="w-10 h-10" // Adjust size as needed
        />
      </div>

      {/* Collapsible Buttons */}
      {isExpanded && (
        <div className="flex flex-col items-center">
          {/* Email Button styled as per the provided image */}
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center bg-gray-200 border-t border-gray-600"
          >
            <img
              src="/icons/email-icon.png" // Ensure the path is correct
              alt="Email"
              className="w-5 h-5"
            />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/your-phone-number"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center bg-green-100 border-t border-gray-600"
          >
            <img
              src="/icons/whatsapp-icon.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>

          {/* Phone Call Button with rounded bottom corners */}
          <a
            href="tel:+your-phone-number"
            className="w-12 h-12 flex justify-center items-center bg-red-100 border-t border-gray-600 rounded-b-md"
          >
            <img
              src="/icons/phone-icon.png"
              alt="Phone"
              className="w-6 h-6"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default FAB;
