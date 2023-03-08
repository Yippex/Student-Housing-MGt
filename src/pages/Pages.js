import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import AdminPage from "../Admin/AdminHome";
import {useLocation} from 'react-router-dom'

const Pages = () => {
const location = useLocation();
const path = location.pathname.split("/")[1]
console.log(path)


  return (
    <>
     {path.toLocaleLowerCase() === 'admin' ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Admin/*" element={<AdminPage/>}/>
        
      </Routes>
    </>
  );
};

export default Pages;
