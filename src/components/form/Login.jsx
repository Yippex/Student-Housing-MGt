import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] =useState()
  const[ password, setPassword] = useState()

  return (
    <>
     <div className="">
            <h1 className="text-xl font-bold pb-8 text-center items-center ml-3 pt-[10%]">
              Login Here
            </h1>
          </div>
          <form action="" className="top-[5% px-4]">
            <div className="mb-3">
              <label htmlFor="" className="block font-bold text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                className="p-2 border bg-white rounded-lg w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="block font-bold text-lg">
                Password
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="p-2 border bg-white rounded-lg w-full"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button className="pb-4 w-full p-2 bg-orange-500 rounded-lg text-white text-lg">
              Login
            </button>
            <p className="text-lg pt-5 text-center pb-5">
              Don't have an account?{" "}
              <Link to="Register" className="text-orange-500 font-bold">
                Register
              </Link>
            </p>
          </form>
    </>
  )
}

export default Login