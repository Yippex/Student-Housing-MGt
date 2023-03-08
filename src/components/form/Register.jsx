import React, { useState } from "react";

const Register = () => {
    const[action, setAction] = useState('Student')
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div  className="w-[300px] md:w-96 bg-white px-8 py-2 rounded-lg shadow-2xl">
        <h1 className="text-center text-xl mb-4 font-bold">Register Here</h1>
        <div className="flex justify-between mb-3">
            <p className="border-black border-b-2 cursor-pointer" onClick={() => setAction('Student')}>Student</p>
            <p className="border-black border-b-2 cursor-pointer" onClick={() =>setAction('Agent')}>Agent</p>
        </div>
            { action ==='Student'?
            ( 
               <form action="" className="top-[5% px-4]">
          <div className="mb-3">
            <label htmlFor="" className="block">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name" 
              className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="block">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              id="email"
              className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="block">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="block">Confirm Password:</label>
            <input
              type="password"
              name="confirm password"
              id="confirm password"
              className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
            />
          </div>
          <div className="mb-3">
            <button className="w-full bg-orange-400 text-white p-2 rounded-lg">Register</button>
            <p className="text-center mt-2">Have an account? <span className="text-orange-400 italic underline">Login here</span></p>
          </div>
        </form>): 
        (  <form action=""  className="top-[10% px-4]">
          <div className="mb-2">
            <label htmlFor="" className="block">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name" 
              className="p-2 border border-blue-600 w-full rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="" className="block">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              id="email"
              className=" p-2 border border-blue-600 w-full rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="" className="block">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="p-2 border border-blue-600 w-full rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="" className="block">Confirm Password:</label>
            <input
              type="password"
              name="confirm password"
              id="confirm password"
              className="p-2 border border-blue-600 w-full rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="" className="block">Campus:</label>
            <input
              type="text"
              name="Campus"
              id="confirm password"
              className="p-2 border border-blue-600 w-full rounded-lg"
              placeholder="Gk capmus"
            />
          </div>
          
          <div className="mb-2">
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg">Register</button>
            <p className="text-center mt-2">Have an account? Login here</p>
          </div>
        </form>)}
      
        </div>
      </div>
    </div>
  );
};

export default Register;
