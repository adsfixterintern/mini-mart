import React from "react";
import Image from "next/image";

import ig1 from "../../app/assets/img/IG-1.jpg";
import ig2 from "../../app/assets/img/IG-2.jpg";
import ig3 from "../../app/assets/img/IG-3.jpg";
import ig4 from "../../app/assets/img/IG-4.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#0b3a53] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Beauty Care</h2>
          <p className="text-gray-200 leading-relaxed mb-8 max-w-md">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <h3 className="text-xl font-semibold">Follow Us</h3>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Instagram Shop</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[ig1, ig2, ig3, ig4].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md cursor-pointer group"
              >
                <Image
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
