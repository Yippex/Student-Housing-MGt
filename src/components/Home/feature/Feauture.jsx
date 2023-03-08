import React from "react";
import {House1, House2, House3} from '../../../assets/Images'



const Feauture = () => {
  return (
    <div className="w-full p-2" id="explore">
      <div className="pt-[5%] px-3 md:px-24">
        <h2 className="font-semibold md:text-xl text-base">Best Recommendation</h2>
        <div className="flex justify-between items-center pt-2"> 
          <p className="text-sm md:text-base text-slate-500 "> Discover our exclusive selection of one-of a kind luxury houses </p>
          <button className="p-2 bg-orange-500 text-white rounded-lg md:text-lg hidden md:visible">Explore {">"} </button>
        </div>


        <div className="flex flex-1 flex-col md:flex-row gap-8 items-center pt-8">

          <div className="border border-slate-500 p-4 rounded-lg">
            <img src={House1} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className=" text-sm uppercase ">Gidan Mangoro</h2>
              <p className="text-sm capitalize text-slate-500">Fresh lodge</p>
                <h3 className=" text-sm"> <span className="text-decoration-line: line-through">N</span>180,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-slate-500 text-slate-500 text-center pointer uppercase text-xs rounded">Send inquiry</button>
              </div>
            </div>
          </div>
        

       
          <div className="border border-slate-500 p-4 rounded-lg">
            <img src={House2} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="text-sm uppercase ">Gk Opp Living Faith</h2>
              <p className="text-sm capitalize text-slate-500">Blue Haven</p>
                <h3 className="text-sm"> <span className="text-decoration-line: line-through">N</span>280,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-slate-500 text-slate-500 text-center pointer uppercase text-xs rounded">Send inquiry</button>
              </div>
            </div>
          </div>
        

       
          <div className="border border-slate-500 p-4 rounded-lg">
            <img src={House1} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="text-sm uppercase ">Talba Road GK</h2>
              <p  className="text-sm capitalize text-slate-500">Apex Lodge</p>
                <h3 className="text-sm"> <span className="text-decoration-line: line-through">N</span>200,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-slate-500 text-slate-500 text-center pointer uppercase text-xs rounded">Send inquiry</button>
              </div>
            </div>
          </div>

          <div className="border border-slate-500 p-4 rounded-lg">
            <img src={House1} alt="" className="rounded-md" />
            <div className="pt-4">
              <h2 className="text-sm uppercase ">TDF Bosso</h2>
              <p className="text-sm capitalize text-slate-500">Queens Castle </p>
                <h3 className="text-sm"> <span className="text-decoration-line: line-through">N</span>120,000.00</h3>
              <div className="pt-2">
                <button className="w-full p-2 border border-slate-500 text-slate-500 text-center pointer uppercase text-xs rounded">Send inquiry</button>
              </div>
            </div>
          </div>
        
        </div>


      </div>

    </div>
  );
};

export default Feauture;
