import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
const Beaches = [
  {
    url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1547594022-1e40e87849e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },
];
const ImgSlider = () => {
  const [slide, setSlide] = useState(0);
  const length = Beaches.length;
  const prevSlide = () => {
    setSlide(slide - 1);
    if (slide === 0) {
      setSlide(0);
    }
  };
  const nextSlide = () => {
    setSlide(slide + 1);
    if (slide === 2) {
      setSlide(2);
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12 flex justify-center items-center relative">
      <BsArrowLeftSquare
        onClick={prevSlide}
        size={30}
        className={
          slide === 0
            ? " opacity-40 bg-white absolute top-[50%] text-3xl text-black rounded-lg p-1 cursor-pointer left-8"
            : " opacity-100 bg-white absolute top-[50%] text-3xl text-black rounded-lg p-1 cursor-pointer left-8"
        }
      />
      <BsArrowRightSquare
        onClick={nextSlide}
        size={30}
        className={
          slide === 2
            ? " opacity-50 bg-white absolute top-[50%] text-3xl text-black rounded-lg p-1 cursor-pointer right-8"
            : " opacity-100 bg-white absolute top-[50%] text-3xl text-black rounded-lg p-1 cursor-pointer right-8"
        }
      />
      {Beaches.map((item, index) => (
        <div
          key={index}
          className={slide === index ? "opacity-100" : "opacity-0"}
        >
          {index === slide && (
            <img
              src={item.url}
              alt="/"
              className="w-screen rounded-lg object-cover h-[600px]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImgSlider;
