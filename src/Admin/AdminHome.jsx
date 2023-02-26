// import React,{useEffect, useState} from "react";

import AdminDashboard from "./Dashbord";
import FileUploadForm from "./FileUpload";
import Sidbar from "./Sidbar";

// import {supabase} from '../../../Config/SupabaseClient'



const AdminPage = () => {

  // const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await supabase
  //         .from("<TABLE-NAME>")
  //         .select("*")
  //         .orderBy("created_at", "desc");
        
  //       setData(response.data);
  //     };
  
  //     fetchData();
  //   }, []);


  return (
    <>
    <div className="bg-slate-100">
      <Sidbar/>
      {/* <AdminDashboard/> */}

    </div>
    </>
  );
};

export default AdminPage;

