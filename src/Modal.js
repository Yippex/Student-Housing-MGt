import React from 'react'

const Modal = ({isVissible, onClose, children}) => {
    if (!isVissible)
        return true
    
  return (
    <div className=' absolute inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex flex-1'>
        <div className=' md:w-96  w-[90%]  grid grid-cols-1'>
            <button onClick={()=> onClose()} className=' place-self-end rounded-full text-red-600 text-2xl p-1'>X</button>
            <div>
                {children}
            </div>

        </div>
  
    </div>
  )
}

export default Modal