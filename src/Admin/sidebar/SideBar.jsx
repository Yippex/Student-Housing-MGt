import React, { useState } from 'react'
import Modal from '../Modal'
import FileUploadForm from './FileUpload'

const Sidbar = () => {
    const[openModal, setOpenModal] = useState()
  return (
    <div className='w-full h-screen '>
        <div className=' w-[20%] shadow-xl bg-white h-screen pt-10'>
            <div className='flex flex-col flex-1 gap-10  px-10 flex-start'>
            <div>
                <button className='text-blue-500 p-2 border border-gray-100 bg-blue-50 rounded-lg'>Dashboard</button>

            </div>
            <div>
                <button>Account</button>
            </div>
            <div>
                <button>Settings</button>
            </div>
            <button onClick={()=>setOpenModal(true)}>Upload a New House</button>
            </div>
            <Modal onClose={()=>setOpenModal(false)} isVissible={openModal} >
                <FileUploadForm/>
            </Modal>

        </div>


    </div>
  )
}

export default Sidbar