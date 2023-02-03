import React from "react";

const Modal = ({isVissible, children, onClose}) => {
    if(!isVissible) return null;
  return (
    <div  className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center " >
      <div className= " w-[320px] md:w-[520px] flex flex-col">
        <button onClick={()=>onClose()} className="place-self-end text-3xl text-red-500 font-bold bg-white w-10 rounded-full">X</button>
        <div className="bg-white p-2 rounded-lg px-3 md:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
