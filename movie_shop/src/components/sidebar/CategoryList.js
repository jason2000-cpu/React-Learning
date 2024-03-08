import Link from "next/link";
import React from "react";

function CategoryList({ category }) {
  return (
    <li
        name={category}
        onClick={()=>{alert(category)}}
        className='mx-1 my-2 h-10 flex items-center px-1  dark:text-white font-[sans-serif] cursor-pointer'>
        <Link href={`/${category}`} className='tracking-wide '>{category}</Link>
    </li>
  )
}

export default CategoryList