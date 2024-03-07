'use client'

import React, { useState } from 'react'

import { IoSearch } from "react-icons/io5";


function SearchBar({ setSearchQuery, searchQuery }) {
    const handleSearch = () => {
        alert(searchQuery)
    }
  return (
    <div className='flex justify-between px-10 w-[75vw] border-b-4 border-[#5d5e89] h-16 my-4 mx-8 items-center'>
        <h2 className='text-[#8289e7] text-[25px]'>New Movies</h2>
        <div className='flex'>
            <input 
                type='text' 
                value={searchQuery}
                className='h-8 w-72 bg-[#3d4063]' 
                placeholder='Search'
                onChange={(e)=>{setSearchQuery(e.target.value)}} 
                
                />
            <IoSearch  
                className='relative top-50 right-8 rounded-sm cursor-pointer'
                size={32} 
                color='#8289e7' 
                onClick={handleSearch}

                />
        </div>
    </div>
  )
}

export default SearchBar