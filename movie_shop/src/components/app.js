'use client'

import React from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Catalogue from './catalogue/Catalogue'

function App() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <Catalogue />
        </div>
    </div>
  )
}

export default App
