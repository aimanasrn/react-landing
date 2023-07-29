import React from "react";
import { greenslate, student2 } from "../assets";
import { GiGraduateCap } from "react-icons/gi";

const Hero = () => {
  return (
    <div id="Home" className="w-full h-screen">
      {/* <img src={greenslate} alt="greenslate" className='absolute z-[-1]' />  */}
      <div className="sm:flex justify-start items-center w-full h-screen sm:px-16 px-6 py-[95px] sm:py-0">
        <div className="flex-1 justify-start items-center">
          <div className="flex-col justify-start">
            <div className="flex items-center rounded-xl bg-teal-500 p-1 sm:w-[20%] w-[70%]">
              <GiGraduateCap className="w-[25px] h-[25px] text-white" />
              <p className="font-poppins font-semibold text-sm text-white pl-2">
                YOUR E-LEARN PARTNER
              </p>
            </div>
            <h1 className="font-poppins font-bold sm:text-[72px] text-[52px] sm:leading-[100px] leading-[60px]">
              Your learn better when <br /> we are together
            </h1>
            <p className="font-poppins font-normal sm:text-[18px] text-[15px] sm:mt-0 my-4">
              Take high quality online course from best online instructors
              around <br />
              community & develop your skills
            </p>

            <div className=" flex mt-3">
              <button className="bg-teal-500 rounded-xl p-3 font-poppins font-semibold text-[18px] text-white hover:-translate-y-1 transition">
                Get Started
              </button>
              <button className="ml-3 bg-teal-500/30 rounded-xl p-3 font-poppins font-semibold text-[18px] text-teal-500 hover:bg-teal-500 hover:text-white">
                Discover
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-start items-center">
          <img src={student2} alt="student" className="w-[600px] z-40" />
          <div className="absolute z-30 w-[150px] h-[150px] top-[50px] right-[20px] sm:top-[100px] sm:right-[10px] sm:w-[300px] sm:h-[300px] rounded-full bg-teal-500 blur" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
