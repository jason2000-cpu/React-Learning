import React from "react";

function CategoryList({ category }) {
    console.log("CATEGORY:::",category)
  return (
    <li 
        className='mx-1 my-2 h-10 flex items-center px-1 hover:bg-[#333551 text-white font-[sans-serif]'>
        { category }
    </li>
  )
}

export default CategoryList