'use client'

import React, { useRef } from 'react'

export default function  ImageToggleOnMouseOver({primaryImg, secondaryImg}) {
    const imageRef = useRef(null);

  return (
    <div>
        <img 
            onMouseOver={()=>{imageRef.current.src = secondaryImg}} 
            onMouseOut={()=>{imageRef.current.src = primaryImg}}
            src={primaryImg}
            alt=""
            ref={imageRef}
            />
    </div>
  )
}
