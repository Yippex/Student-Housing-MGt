import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] =useState()
  const[ password, setPassword] = useState()

  return (
    <>
     <div className="">
            <h1 className="text-base pb-8 text-center items-center ml-3 pt-[10%] uppercase ">
              Login Here
            </h1>
          </div>
          <form action="" className="top-[5% px-4]">
            <div className="mb-5">
              <label htmlFor="" className="block text-sm text-slate-500 ">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                className="p-2 border bg-white rounded w-full"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block text-sm text-slate-500">
                Password*
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="p-2 border bg-white rounded w-full"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button className="w-full pointer px-3 py-2.5 border border-blue-100 uppercase text-sm rounded text-slate-500 md:px-5 md:py-3 hover:bg-slate-100 transition-all duration-700 bg-blue-100">
              Login
            </button>
            <p className="text-sm pt-5 text-center pb-5 mx-8">
              Don't have an account?{" "}
              <Link to="Register" className="text-red-500 italic underline pointer">
                Register
              </Link>
            </p>
          </form>
    </>
  )
}

export default Login