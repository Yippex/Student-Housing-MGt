import React, { useState } from "react";
import { Link } from "react-router-dom";
import  Logoo from "../../assets/Logo-removebg-preview.png";
import Modal from "../../Modal";
import Login from "../form/Login";
import Register from "../form/Register";
import searchIcon from "../../assets/search.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [modal2, setOpenModal2] = useState(false);


  return (
    <>
        <div className=" flex items-center w-full py-3 px-4 md:px-24 drop-shadow-md justify-between rounded-b-lg h-16 fixed bg-white md:h-24 md:px-10">
          <div>
            <img src={Logoo} alt="" className="h-11 md:h-16" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
            {/* <input
              type="search"
              className="p-2 bg-white rounded-lg text-xl border border-gray-400 w-12 h-2"
            /> */}
              <img src={searchIcon} alt="searchIcon" 
                className="h-7 md:h-9 pointer opacity-50"
              />

            </div>
            <div className="flex gap-4">
            <button
              onClick={() => setOpen(true)}
              className="pointer px-3 py-1.5 border border-blue-100 uppercase text-sm rounded text-slate-500 md:px-5 md:py-3 bg-blue-100 hover:bg-slate-100 transition-all duration-700"
            >
              Login
            </button>
            <button
              onClick={() => setOpenModal2(true)}
              className=" pointer px-3 py-1.5 border border-blue-100 uppercase text-sm rounded text-slate-500 md:px-5 md:py-3 bg-blue-100 hover:bg-slate-100 transition-all duration-700"
            >
              Register
            </button>
              
            </div>

          </div>
          
           
        </div>
      <Modal isVissible={open} onClose={() => setOpen(false)} >
        <Login />
      </Modal>

      <Modal isVissible={modal2} onClose={() => setOpenModal2(false)}>
        <Register/>
      </Modal>
    </>
  );
};

export default NavBar;
