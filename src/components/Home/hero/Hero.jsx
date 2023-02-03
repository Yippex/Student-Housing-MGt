import React from "react";
import skyscraper from "../../../assets/skyscraper.jpeg";

const Hero = () => {
  return (
    <div className=" w-full ">
      <div className="flex items-center justify-around gap-10 flex-col md:flex-row pt-10   px-3 md:px-24 w-full md:pb-[10%]">
        <div>
          <h2 className=" text-xl md:text-4xl font-bold text-left">Welcom to Campus Homes. Your comfort your choice</h2>
          <p className=" text-lg md:text-2xl mt-10 text-justify ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur sint fugiat earum alias quaerat distinctio? Deleniti
          </p>
          <button className="p-3 text-white bg-orange-500 rounded-lg  text-xl mt-10">Explore more</button>
        </div>
        <div className="pt-8">
          <img src={skyscraper} alt="" className='bg-white rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
