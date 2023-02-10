import React from "react";
import HeroImage from "../../../assets/heroImage.png";

const Hero = () => {
  return (
    <div className=" w-full ">
      <div className="flex items-center justify-around gap-5 flex-col pt-10 md:pt-0 md:flex-row px-3 md:px-24 w-full bg-gray-100">
        <div className="flex flex-col justify-center  pt-4 ">
          <h2 className=" text-xl md:text-4xl font-semibold ">
            Let's Hunt for your dream house{" "}
          </h2>
          <p className=" text-lg md:text-2xl mt-10 text-justify ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="pt-4">
            <button className="p-3 text-white bg-orange-500 rounded-lg">
              Explore more
            </button>
          </div>
        </div>
        <div className="pt-8">
          <img src={HeroImage} alt="" className="bg-transparent rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
