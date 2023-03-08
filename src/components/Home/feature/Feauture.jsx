import React from "react";
import {House1, House2, House3} from '../../../assets/Images'



const Feauture = () => {
  return (
    <div className="w-full">
      <div className="pt-[5%] px-3 md:px-24">
        <h2 className="font-bold md:text-5xl text-2xl">Best Recommendation</h2>
        <div className="flex justify-between items-center pt-4"> 
          <p className="text-lg "> Discover our exclusive selection of one-of a kind luxury houses </p>
          <button className="p-2 bg-orange-500 text-white rounded-lg md:text-lg hidden md:visible">Explore {">"} </button>
        </div>


        <div className="flex flex-1 flex-col md:flex-row gap-8 items-center pt-8">
          <div className="border border-gray-100 p-4 rounded-lg">
            <img src={House1} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="font-semibold text-2xl ">Gidan Mangoro</h2>
              <p>Fresh lodge</p>
                <h3 className="font-bold"> <span className="text-decoration-line: line-through">N</span>180,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-green-400 text-green-500 text-center  rounded-lg">Send inquiry</button>
              </div>
            </div>
          </div>
        

       
          <div className="border border-gray-100 p-4 rounded-lg">
            <img src={House2} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="font-semibold text-2xl ">Gk Opp Living Faith</h2>
              <p>Blue Haven</p>
                <h3 className="font-bold"> <span className="text-decoration-line: line-through">N</span>280,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-green-400 text-green-500 text-center  rounded-lg">Send inquiry</button>
              </div>
            </div>
          </div>
        

       
          <div className="border border-gray-100 p-4 rounded-lg">
            <img src={House1} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="font-semibold text-2xl ">Talba Road GK</h2>
              <p>Apex Lodge</p>
                <h3 className="font-bold"> <span className="text-decoration-line: line-through">N</span>200,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-green-400 text-green-500 text-center  rounded-lg">Send inquiry</button>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 p-4 rounded-lg">
            <img src={House1} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="font-semibold text-2xl ">TDF Bosso</h2>
              <p>Queens Castle </p>
                <h3 className="font-bold"> <span className="text-decoration-line: line-through">N</span>120,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-green-400 text-green-500 text-center  rounded-lg">Send inquiry</button>
              </div>
            </div>
          </div>
        
        </div>


      </div>

    </div>
  );
};

export default Feauture;
