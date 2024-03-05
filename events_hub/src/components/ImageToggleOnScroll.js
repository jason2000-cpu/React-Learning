'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function  ImageToggleOnScroll({primaryImg, secondaryImg}) {
    const imageRef = useRef(null);
    const [inView, setInView] = useState(false);

    const isInView = ()=> {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    const scrollHandler = ()=> {
        setInView(isInView);
    }

    useEffect(()=>{
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        };
    }, []);

  return (
    <div>
        <img
            src={inView ? secondaryImg : primaryImg}
            alt=""
            ref={imageRef}
            />
    </div>
  )
}
