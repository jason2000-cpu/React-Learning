import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../app";

function CategoryList({ category }) {

  const context = useContext(AppContext);

  return (
    <li
        name={category}
        onClick={()=>{context.setSearchQuery(category); alert(context.searchQuery)}}
        className='mx-1 my-2 h-10 flex items-center px-1  dark:text-white font-[sans-serif] cursor-pointer'>
        <a href={'#'} className='tracking-wide '>{category}</a>
    </li>
  )
}

export default CategoryList