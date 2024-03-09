import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../app";

import MovieCatalogue from "../catalogue/MovieCatalogue";

function CategoryList({ category }) {

  const context = useContext(AppContext);

  const handleClick = ()=>{
    context.setSearchQuery(category); 
    return (<MovieCatalogue title={category} />)
  }

  return (
    <li
        name={category}
        onClick={handleClick}
        className='mx-1 my-2 h-10 flex items-center px-1  dark:text-white font-[sans-serif] cursor-pointer hover:bg-gray-100 hover:text-[#8289e7] hover:rounded'>
        <a href={'#'} className='tracking-wide '>{category}</a>
    </li>
  )
}

export default CategoryList