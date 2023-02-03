import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
     <div className="">
            <h1 className="text-3xl font-bold pb-8 text-center items-center ml-3 pt-[10%]">
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
            <button className="pb-4 w-full p-2 bg-orange-500 rounded-lg text-white text-2xl">
              Login
            </button>
            <p className="text-xl pt-5 text-center pb-5">
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