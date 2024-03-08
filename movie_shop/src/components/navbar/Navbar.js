import React, { useState } from 'react'

import Dropdown from './Dropdown';

import { IoMdArrowDropdown } from "react-icons/io";
import { FaAffiliatetheme } from "react-icons/fa";


function Navbar() {
  return (
    <div className='shadow-md border-b-2 dark:border-b-0 border-purple-100 mt-[-1px] h-16 bg-white dark:text-white dark:bg-[#333551] rounded-[2px] flex items-center justify-between px-10  fixed z-[1] w-[100vw]'>
      <div>
      <img src='/static/images/logo.png'  className='w-28 h-16'/>
      </div>
      <div className='flex items-center justify-around w-40'>
        <h2 className=''>Jackson</h2>
        <div className='w-[50px] h-[50px] border rounded-[25px] overflow-hidden'>
          <img src='/static/images/avatar.png' alt='profile' />
        </div>
         <div className='flex justify-around w-10'>
            <Dropdown />
         </div>
      </div>
    </div>
  )
}

export default Navbar