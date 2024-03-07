'use client'

import React, { useEffect, useState } from 'react'
import { MovieData } from '../../../public/static/images/MovieData';


function MovieCatalogue({ searchQuery }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, 1000)
        }).then(()=>{
            setMovies(MovieData.results)
        })
    }, [])

  return (
    <div>
        <div className='grid grid-cols-4 gap-2'>
            {movies.map((movie)=>{
                    return (
                        <div className='border m-10 h-64 w-60'>
                            {/* <h1>{movie.original_title}</h1> */}
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default MovieCatalogue