import React, { useState } from "react";
import { Link } from "react-router-dom";
import  Logo from '../../assets/Logo.png'
import Modal from "../../Modal";
import Login from "../form/Login";
import Register from "../form/Register";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [modal2, setOpenModal2] = useState(false);

  return (
    <>
      <div className="shadow-sm pb-4 w-full">
        <div className=" flex  items-center py-3 px-4 justify-between  md:px-24">
          <div>
            <img src={Logo} alt="" className="h-[60px] " />
          </div>
          
            <div className="hidden md:visible">
            <input
              type="search"
              className="p-2 bg-white rounded-lg text-xl border border-gray-400"
            />

            </div>
            <div className="flex gap-4">
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-white p-2 rounded-lg "
            >
              Login
            </button>
            <button
              onClick={() => setOpenModal2(true)}
              className=" p-2 border border-orange-500 hover:bg-orange-500 hover:text-white  rounded-lg"
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
