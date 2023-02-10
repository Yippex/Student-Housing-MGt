import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
// import AdminPage from "../components/Home/Admin/Admin";

const Pages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/Admin" element={<AdminPage/>}/> */}
        
      </Routes>
    </>
  );
};

export default Pages;
