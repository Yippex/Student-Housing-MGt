import React from "react";
import HeroImage from "../../../assets/heroImage.png";

const Hero = () => {
  return (
    <div className=" w-full h-screen pt-12 bg-gray-100 flex items-center">
      <div className="flex items-center flex-col pt-10 md:pt-0 md:flex-row md:gap-10 px-5 md:px-24 w-full bg-gray-100">
        <div className="flex flex-col justify-center  pt-4 md:px-5 md:mx-3">
          <h2 className=" text-base md:text-xl font-semibold capitalize ">
            Let's Hunt for your dream house{" "}
          </h2>
          <p className=" text-sm md:text-base mt-3 text-justify text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et necessitatibus fugiat perferendis deserunt vero, aspernatur illo ipsa, reprehenderit animi aliquam alias porro sequi aut ea dolore explicabo optio, soluta dolorum.
          </p>

          <div className="pt-4">
            <a href="#explore"><button className="pointer px-3 py-1.5 border border-blue-100 uppercase text-sm rounded text-slate-500 md:px-5 md:py-3 bg-blue-100 hover:bg-slate-100 transition-all duration-700">
              Explore more
            </button></a>
          </div>
        </div>
        <div className="">
          <img src={HeroImage} alt="" className="bg-transparent rounded md:w-screen" />
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
