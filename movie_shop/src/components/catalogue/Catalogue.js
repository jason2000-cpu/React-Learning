'use client'

import React, { useState } from 'react'

import SearchBar from './SearchBar'
import MovieCatalogue from './MovieCatalogue'

function Catalogue() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className=' dark:bg-[#474a6c] w-[90vw] pt-16 ml-64'>
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <MovieCatalogue searchQuery={searchQuery}/>
    </div>
  )
}

export default Catalogue