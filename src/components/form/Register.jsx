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
          <h1 className="text-base pb-2 text-center items-center ml-3 pt-[10%] uppercase ">
            Register Here
          </h1>
        </div>
        <div className='flex items-center w-full justify-between p-2 px-4'>
            <button onClick={()=>setAction("Student")} className='text-sm uppercase border-b py-1'>Student</button>
            <button onClick={()=>setAction('Agent')} className='text-sm uppercase'>Agent</button>
        </div>
        </div>

        {
            action==='Student'? (
                <form action="" className="top-[5% px-4] w-full px-4 py-4">
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500 ">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Password*
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Campus*
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <button className=" w-full pointer px-3 py-2.5 border border-blue-100 uppercase text-sm rounded text-slate-500 md:px-5 md:py-3 hover:bg-slate-100 transition-all duration-700 bg-blue-100">
                  Register
                </button>
                <p className="text-sm pt-5 text-center mx-16">
                  Have and account?{" "}
                  {/* {
                    login ===''
                  } */}
                  <Link to="Login" className="text-red-500 italic underline pointer">
                    Login
                  </Link>
                </p>
              </form>

            ):(
                <form action="" className="top-[5% px-4] w-full px-4 py-4 my-7">
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Password*
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block text-sm text-slate-500">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="p-2 border bg-white rounded w-full"
                  />
                </div>
                
                <button className=" w-full pointer px-3 py-2.5 border border-blue-100 uppercase text-sm rounded text-slate-500 md:px-5 md:py-3 hover:bg-slate-100 transition-all duration-700 bg-blue-100">
                  Register
                </button>
                <p className=" py-5 text-sm text-center mx-16">
                  Have and account?{" "}
                  <Link to="Login" className="text-red-500 italic underline pointer">
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