'use client'

import React, { useState } from 'react'

import SearchBar from './SearchBar'
import MovieCatalogue from './MovieCatalogue'

function Catalogue() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className=' bg-[#474a6c] w-[90vw]'>
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <MovieCatalogue searchQuery={searchQuery}/>
    </div>
  )
}

export default Catalogue