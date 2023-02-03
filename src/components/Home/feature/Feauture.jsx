import React from "react";
import h2 from '../../../assets/h2.png'
import h3 from '../../../assets/h3.png'
import h4 from '../../../assets/h4.png'


const Feauture = () => {
  return (
    <div className="w-full">
      <div className="pt-10 mb-10 px-3 md:px-24">
        <h2 className="text-center text-xl md:text-3xl font-bold">Feautued house types</h2>
        <div className="flex items-center flex-wrap justify-center md:text-center gap-20 pt-10">
          <div className="flex items-center flex-col justify-center w-[300px] p-4 shadow-xl">
            <img src={h2} alt="" className="h-[180px]" />
            <h2 className="text-xl font-bold mt-5">Single room</h2>
            <p>89+ property</p>

          </div>

          <div className="flex items-center flex-col justify-center w-[300px] p-4 shadow-xl">
            <img src={h3} alt="" className="h-[180px]" />
            <h2 className="text-xl font-bold mt-5">Self contain</h2>
            <p>89+ property</p>

          </div>

          <div className="flex items-center flex-col justify-center w-[320px] p-4 shadow-xl">
            <img src={h4} alt="" className="h-[180px]" />
            <h2 className="text-xl font-bold mt-5">Shops and stores</h2>
            <p>89+ property</p>

          </div>

          
          <div className="flex items-center flex-col justify-center w-[300px] p-4 shadow-xl">
            <img src={h4} alt="" className="h-[180px]" />
            <h2 className="text-xl font-bold mt-5">Shops and stores</h2>
            <p>89+ property</p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Feauture;
