import React from 'react'

import { IoMdArrowDropdown } from "react-icons/io";


function Navbar() {
  return (
    <div className='shadow-2xl border-b-2 border-black mt-[-1px] h-16 bg-[#333551] rounded-[2px] flex items-center justify-between px-10'>
      <div>
      <img src='/static/images/logo.png'  className='w-28 h-16'/>
      </div>
      <div className='flex items-center justify-around w-40'>
        <h2 className='text-white'>Jackson</h2>
        <div className='w-[50px] h-[50px] border rounded-[25px] overflow-hidden'>
          <img src='/static/images/avatar.png' alt='profile' />
        </div>
         <div>
            <IoMdArrowDropdown  color='white' size={"25px"}/>
         </div>
      </div>
    </div>
  )
}

export default Navbar