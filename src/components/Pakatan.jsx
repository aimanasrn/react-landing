import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdNavigation } from "react-icons/md";

const Pakatan = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-600 ">
      <div className="flex-col items-center leading-[20px] text-white animate-spin">
        <div className="flex justify-center items-center font-sans font-normal text-[20px]">
          <h1 className="px-[22px]">P</h1>
          <h1 className="px-[22px]">A</h1>
          <h1 className="px-[22px]">K</h1>
          <h1 className="px-[22px]">A</h1>
          <h1 className="px-[22px]">T</h1>
          <h1 className="px-[22px]">A</h1>
          <h1 className="px-[22px]">N</h1>
        </div>
        <div className="flex justify-center items-center font-sans font-semibold text-[72px]">
          <h1>HAR</h1>
          <MdNavigation className="mt-2" />
          <h1>PAN</h1>
        </div>
      </div>
      {/* <span><AiFillHeart className="w-[90px] h-[90px] text-red-500 animate-bounce" /></span> */}
    </div>
  );
};

export default Pakatan;
