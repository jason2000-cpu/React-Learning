'use client'

import React, { useContext } from 'react'

import { AppContext } from '../app';

import { IoSearch } from "react-icons/io5";
import { FaHandHoldingUsd } from 'react-icons/fa';


function SearchBar() {
    const formData = {
        "searchQuery": ""
    }

    const handleSearch = () => {
        alert(context.searchQuery)
    }

    const context = useContext(AppContext);
    const handlesubmit = () => {
        alert("form Submited", formData.searchQuery)
        console.log()
    }
  return (
    <div className='flex justify-between px-10 w-[75vw] border-b-[3px] border-[#5d5e89] h-16 my-4 mx-8 items-center'>
        <h2 className='text-[#8289e7] text-[25px]'>{context.searchQuery || "New Movies"}</h2>
        <div className='flex'>
            <form onSubmit={handlesubmit}>
                <input 
                    type='text' 
                    className='h-8 w-72 dark:bg-[#3d4063] border border-black rounded' 
                    placeholder='Search'
                    onChange={(e)=>{formData.searchQuery[e.target.value]}} 
                    
                    />
            </form>
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