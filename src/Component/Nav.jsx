import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineClose,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="max-w[1640px] mx-auto px-4 absolute w-full z-30 ">
      <div className="flex justify-between items-center h-[80px]">
        <h1 className="text-3xl font-bold text-white">beaches .</h1>
        <ul className="hidden md:flex text-white">
          <li className="mr-4 cursor-pointer text-2xl p-4">home</li>
          <li className="mr-4 cursor-pointer text-2xl p-4">destenation</li>
          <li className="mr-4 cursor-pointer text-2xl p-4">travel</li>
          <li className="mr-4 cursor-pointer text-2xl p-4">book</li>
        </ul>
        <div className="hidden md:flex items-center text-white">
          <AiOutlineSearch size={30} className="mr-4" />
          <AiOutlineUserAdd size={30} />
        </div>
        <GiHamburgerMenu
          size={30}
          className=" cursor-pointer text-white md:hidden"
          onClick={() => setIsShow(true)}
        />
      </div>
      {/**mobile view */}
      <div
        className={`${
          isShow
            ? "md:hidden bg-slate-100 p-4 rounded-lg absolute top-0 left-0 w-full translate-y-0 duration-300 z-10"
            : "md:hidden bg-slate-100 p-4 rounded-lg absolute top-0 left-0 w-full translate-y-[-100%] duration-300"
        }`}
      >
        <div className="flex justify-between items-center my-2">
          <h1 className="font-bold text-2xl">beaches.</h1>
          <AiOutlineClose
            size={30}
            className=" cursor-pointer"
            onClick={() => setIsShow(false)}
          />
        </div>
        <ul>
          <li className=" cursor-pointer text-2xl p-2 border-b-2">home</li>
          <li className=" cursor-pointer text-2xl p-2 border-b-2">
            destenation
          </li>
          <li className=" cursor-pointer text-2xl p-2 border-b-2">travel</li>
          <li className="cursor-pointer text-2xl p-2 border-b-2">book</li>
          <div className="my-3">
            <button className="capitalize bg-[blue] text-white font-bold text-xl block w-full text-center rounded-xl mb-3 p-2">
              search
            </button>
            <button className="capitalize bg-[blue] text-white font-bold text-xl block w-full text-center rounded-xl p-2">
              account
            </button>
          </div>
          <div className="socia flex justify-between items-center my-8 text-white">
            <FaFacebookF size={30} className="bg-[#1877f2] p-2 rounded-lg" />
            <FaInstagram size={30} className="bg-[#fd1d1d] p-2 rounded-lg" />
            <FaPinterestP size={30} className="bg-[#e60023] p-2 rounded-lg" />
            <FaTwitter size={30} className="bg-[#1da1f2] p-2 rounded-lg" />
            <FaYoutube size={30} className="bg-[#ff0000] p-2 rounded-lg" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
