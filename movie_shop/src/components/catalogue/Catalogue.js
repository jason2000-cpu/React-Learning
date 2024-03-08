'use client'

import React from 'react'

import SearchBar from './SearchBar'
import MovieCatalogue from './MovieCatalogue'

function Catalogue() {
  return (
    <div className=' dark:bg-[#474a6c] w-[90vw] pt-16 ml-64'>
      <SearchBar />
      <MovieCatalogue/>
    </div>
  )
}

export default Catalogue