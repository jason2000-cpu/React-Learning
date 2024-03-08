'use client'

import React, { useEffect, useState, useContext } from 'react'
import { MovieData } from '../../../public/static/images/MovieData';
import { AppContext } from '../app';
import Loading from '../Loading/Loading';


function MovieCatalogue() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const context = useContext(AppContext);

    useEffect(()=>{
        setIsLoading(true);
        new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, 1000)
        }).then(()=>{
            setMovies(MovieData.results)
            setIsLoading(false);
        })
        console.log("FROM USEEFFECT::::",context.searchQuery);
    }, [context.searchQuery])

  return isLoading ? <Loading /> : (
    <div>
        <div className='grid grid-cols-4'>
            {movies.map((movie)=>{
                    return (
                        <div className='border m-10 h-64 w-60 overflow-hidden'>
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