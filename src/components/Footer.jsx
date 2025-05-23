import React from "react";
import {
  FaFacebookF, FaInstagram,
  FaXTwitter,FaLinkedinIn,
  FaYoutube,
  FaRegCopyright,} from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
const Footer = () => {
  return (
    <div className="flex flex-col md:m-2  ">
      <div className="flex flex-col lg:flex-row justify-between gap-10  px-6 py-10 md:px-16">
        
        <div className="flex flex-col max-w-md">
<div className="relative w-16 h-16 bg-white rounded-2xl mb-3 shadow-[-6px_6px_0px_rgba(128,128,128,1)]">
  <TbNotes className="absolute top-1 left-6 text-red-500 text-xl -rotate-20" />

  <span className="absolute top-1/2 left-[60%]  -rotate-3 transform -translate-y-1/2 -translate-x-1/3 text-black text-2xl font-bold">
    doList
  </span>
</div>
          <p className="mb-3">
            Subscribe to our newsletter for the latest features and updates delivered to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="email"
              placeholder="Your email here"
              className="border border-gray-400 px-3 py-2 rounded-md w-full sm:w-auto"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md w-full sm:w-auto">
              Join
            </button>
          </div>
          <p className="text-xs text-gray-500">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

        <div className="flex flex-wrap gap-10">

          <div className="flex flex-col min-w-[120px]">
            <h3 className="font-bold mb-3 text-lg">Useful Links</h3>
            {["Home Page", "About Us", "Contact Us", "Blog Posts", "FAQs"].map((link, idx) => (
              <p key={idx} className="mb-2 hover:text-red-500 cursor-pointer">{link}</p>
            ))}
          </div>

          <div className="flex flex-col min-w-[120px]">
            <h3 className="font-bold mb-3 text-lg">Resources</h3>
            {["Help Center", "User Guide", "Community Forum", "Feedback", "Support"].map((link, idx) => (
              <p key={idx} className="mb-2 hover:text-red-500 cursor-pointer">{link}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-3">Connect with us</h3>
          {[
            { icon: <FaFacebookF className="text-blue-600" />, label: "Facebook" },
            { icon: <FaInstagram className="text-pink-600" />, label: "Instagram" },
            { icon: <FaXTwitter className="text-black" />, label: "X (Twitter)" },
            { icon: <FaLinkedinIn className="text-blue-800" />, label: "LinkedIn" },
            { icon: <FaYoutube className="text-red-600" />, label: "YouTube" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-3 cursor-pointer hover:underline">
              {item.icon}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-500 h-0.5" />

      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-sm text-gray-600">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <FaRegCopyright />
          <span>2024 Osumare. All rights reserved.</span>
        </div>
        <div className="flex  gap-4">
          <a href="#" className="underline">Privacy Policy</a>
          <a href="#" className="underline">Terms of Service</a>
                    <a href="#" className="underline">Cookie Settings</a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
