import React from "react";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
const Destenation = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12 text-center">
      <h1 className="font-bold text-3xl mb-3">All - inclusive resorts</h1>
      <p>on the caribbean's best beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-4">
        <img
          src={maldives}
          alt="/"
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
        />
        <img src={maldives2} alt="/" className="w-full h-full object-cover" />
        <img src={maldives3} alt="/" className="w-full h-full object-cover" />
        <img src={borabora} alt="/" className="w-full h-full object-cover" />
        <img src={borabora2} alt="/" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Destenation;
