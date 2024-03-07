import React from 'react'

import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className='flex justify-between px-10 w-[75vw] border-b-4 border-[#5d5e89] h-16 my-4 mx-8 items-center'>
        <h2 className='text-[#8289e7] text-[25px]'>New Movies</h2>
        <div className='flex'>
            <input type='text' className='h-8 w-72 bg-[#3d4063]' placeholder='Search' />
            <IoSearch  className='relative top-50 right-8 rounded-sm' size={32} color='#8289e7'/>
        </div>
    </div>
  )
}

export default SearchBar