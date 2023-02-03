import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'


const Register = () => {
    const[action, setAction]= useState('Student')
    const[login, setLogin] =useState(false)
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold  items-center ml-3 pt-[10%]">
            Register Here
          </h1>
        </div>
        <div className='flex gap-[16rem] mt-10 items-center '>
            <button onClick={()=>setAction("Student")} className='text-2xl font-bold border-b-8 border-b-black'>Student</button>
            <button onClick={()=>setAction('Agent')} className='text-2xl font-bold border-b-8 border-b-black'>Agent</button>
        </div>
        </div>

        {
            action==='Student'? (
                <form action="" className="top-[5% px-4] shadow-xl px-4 py-4 mt-4">
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Campus
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <button className="pb-4 w-full p-2 bg-orange-500 rounded-lg text-white text-2xl">
                  Register
                </button>
                <p className="text-xl pt-5 text-center pb-5">
                  Have and account?{" "}
                  {/* {
                    login ===''
                  } */}
                  <Link to="Login" className="text-orange-500 font-bold">
                    Login
                  </Link>
                </p>
              </form>

            ):(
                <form action="" className="top-[5% px-4] shadow-xl px-4 py-4 mt-4">
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block font-bold text-xl">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded-lg w-full"
                  />
                </div>
                
                <button className="pb-4 w-full p-2 bg-orange-500 rounded-lg text-white text-2xl">
                  Register
                </button>
                <p className="text-xl pt-5 text-center pb-5">
                  Have and account?{" "}
                  <Link to="Login" className="text-orange-500 font-bold">
                    Login
                  </Link>
                </p>
              </form>
            )
        }

       
    </>
  )
}

export default Register