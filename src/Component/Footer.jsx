import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-3">
        <h1 className="font-bold text-2xl mb-4">Beaches.</h1>
        <div className="text-white flex justify-between items-center gap-6 mb-4">
          <FaFacebookF size={30} className="bg-[#1877f2] p-2 rounded-lg" />
          <FaInstagram size={30} className="bg-[#fd1d1d] p-2 rounded-lg" />
          <FaPinterestP size={30} className="bg-[#e60023] p-2 rounded-lg" />
          <FaTwitter size={30} className="bg-[#1da1f2] p-2 rounded-lg" />
          <FaYoutube size={30} className="bg-[#ff0000] p-2 rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row justify-between items-center px-3">
            <ul>
                  <li className="mb-2 text-xl cursor-pointer">about</li>
                  <li className="mb-2 text-xl cursor-pointer">partenership</li>
                  <li className="mb-2 text-xl cursor-pointer">careers</li>
                  <li className="mb-2 text-xl cursor-pointer">newsroom</li>
                  <li className="mb-2 text-xl cursor-pointer">advertising</li>
            </ul>
            <ul>
                  <li className="mb-2 text-xl cursor-pointer">home</li>
                  <li className="mb-2 text-xl cursor-pointer">destenation</li>
                  <li className="mb-2 text-xl cursor-pointer">travel</li>
                  <li className="mb-2 text-xl cursor-pointer">book</li>
                  <li className="mb-2 text-xl cursor-pointer">view</li>
            </ul>
      </div>
    </div>
  );
};

export default Footer;
