import React,{useEffect, useState} from "react";
import FileUploadForm from "./FileUploadForm";
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
    <div className="flex h-screen flex-col bg-gray-200">
      <header className="bg-white p-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Page</h1>
      </header>
    <section>
        <FileUploadForm/>
    </section>
    {/* {data} */}

      <main className="flex-1 p-6">
        <p className="text-gray-700">Welcome to the admin page.</p>
      </main>
      <footer className="bg-white p-6">
        <p className="text-gray-500 text-center">&copy; 2023 Company Name</p>
      </footer>
    </div>
  );
};

export default AdminPage;





// import React, { useState, useEffect } from "react";
// import supabase from "@supabase/supabase-js";

// const AdminDashboard = () => {
//   const [data, setData] = useState([]);

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

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Data 1</th>
//           <th>Data 2</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item) => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.data_1}</td>
//             <td>{item.data_2}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default AdminDashboard;
