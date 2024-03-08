'use client'

import React, { createContext, useState } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Catalogue from './catalogue/Catalogue'

export const AppContext = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const contextValue = {
    searchQuery,
    setSearchQuery
  }
  return (
    <div>
    <AppContext.Provider value={contextValue}>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <Catalogue />
        </div>
    </AppContext.Provider>
    </div>
  )
}

export default App
