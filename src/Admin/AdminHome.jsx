import { Route, Routes } from "react-router-dom";

import SideBar from "./sidebar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
const AdminPage = () => {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </>
  );
};

export default AdminPage;
