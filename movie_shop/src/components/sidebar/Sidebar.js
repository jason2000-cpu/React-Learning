'use client'

import React from 'react'

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
  return (
    <div className='w-64  bg-[#2d304b] h-[92vh]'>
      <div className='flex justify-end px-4 cursor-pointer'>
          <MdKeyboardDoubleArrowLeft color='white' size={40} />
      </div>
      <ul>
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