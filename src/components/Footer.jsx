import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
     <footer className="text-center mt-[40px] font-[700] text-[#324d67]">
      <div className="justify-center">
        <p>2025 Jasim's Headphones All rights reserved</p>

      <div className="flex justify-center gap-4">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-50 transition"
        >
          <FaInstagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-colors" />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-50 transition"
        >
          <FaTwitter className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
