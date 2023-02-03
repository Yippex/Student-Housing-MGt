import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/favicon.png";
import Modal from "../../Modal";
import Login from "../form/Login";
import Register from "../form/Register";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [modal2, setOpenModal2] = useState(false);

  return (
    <>
      <div className="shadow-sm pb-4">
        <div className=" flex w-full items-center p-3 pt-3 flex-row justify-between md:justify-between md:px-24">
          <div>
            <img src={Logo} alt="" className="h-[60px] " />
          </div>
          <div className="gap-8 items-center hidden md:visible md:flex">
            <Link to="/" className="text-xl">
              {" "}
              Home
            </Link>
            <input
              type="search"
              className="border p-2 bg-white rounded-lg text-xl"
            />
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-white p-3 rounded-lg font-bold text-2xl "
            >
              Login
            </button>
            <button
              onClick={() => setOpenModal2(true)}
              className="text-2xl p-3 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <Modal isVissible={open} onClose={() => setOpen(false)}>
        <Login />
      </Modal>

      <Modal isVissible={modal2} onClose={() => setOpenModal2(false)}>
        <Register/>
      </Modal>
    </>
  );
};

export default NavBar;
