import React from "react";
import maldivesVideo from "../assets/maldivesVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={maldivesVideo}
        className="w-full h-screen object-cover"
        autoPlay
        muted
        loop
      />
      {/** overlay */}
      <div className=" absolute top-0 left-0 w-full h-screen bg-gray-900/50"></div>
      {/** text */}
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
        <p className="font-bold text-2xl mb-4">first class travel</p>
        <p className="font-bold text-2xl mb-4">top 1% location worldwide</p>
        <div className="flex justify-between max-w-[700px] items-center bg-white p-2 rounded-lg">
          <div>
            <input
              placeholder="search for something here"
              type="text"
              className=" focus:outline-none  bg-transparent text-gray-500 "
            />
          </div>
          <div>
            <AiOutlineSearch
              size={30}
              className="bg-[blue] text-white p-1 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
