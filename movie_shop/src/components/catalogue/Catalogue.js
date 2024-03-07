import React from 'react'

import SearchBar from './SearchBar'
import MovieCatalogue from './MovieCatalogue'

function Catalogue() {
  return (
    <div className=' bg-[#474a6c] w-[90vw]'>
      <SearchBar />
      <MovieCatalogue />
    </div>
  )
}

export default Catalogue