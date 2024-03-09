'use client'

import React, { useState } from 'react'

import CategoryList from './CategoryList'

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const movieCategories = [
  "My Collection",
  "Action",
  "Documentary Films",
  "Comedy",
  "Horror",
  "Sience Fiction & Fantasy",
  "Silent Films",
  "War",
  "Western"
]

function Sidebar() {
  const [show, setShow] = useState(true);

  const handleSideBarShow = () => {
    setShow(!show);
    alert("clicked!")
  };
  return (
    <div className='border-r-2 dark:border-r-0 shadow-xl w-64  dark:bg-[#2d304b] h-[100vh] pt-16 fixed'>
      <div className='flex justify-end px-4 cursor-pointer'>
          <MdKeyboardDoubleArrowLeft className='dark:text-white text-black' size={28} onClick={handleSideBarShow} />
      </div>
      <ul className='text-black'>
        {movieCategories.map((category) =>{
            return (
              <CategoryList category={category}/>
              )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar