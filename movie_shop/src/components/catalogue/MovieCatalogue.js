'use client'

import React, { useEffect, useState, useContext } from 'react'
import { MovieData } from '../../../public/static/images/MovieData';
import { AppContext } from '../app';
import Loading from '../Loading/Loading';
import axios from 'axios';

const apiKey = 'b5697d5817492dfccc3ebfa0514a306f';
const baseUrl = 'https://api.themoviedb.org/3';

function MovieCatalogue() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const context = useContext(AppContext);
    const searchQuery = context.searchQuery;

    useEffect(()=>{
        setIsLoading(true);
        async function searchMovies(searchQuery){
            try {
                const response = await axios.get(`${baseUrl}/search/movie`, {
                    params: {
                        api_key: apiKey,
                        query: searchQuery,
                    },
                });
                setMovies(response.data.results);
                setIsLoading(false);

            } catch (error){
                setIsLoading(false);
                console.log("Error", error.message);
            }
        }

        searchMovies(searchQuery);
    }, [context.searchQuery])

  return isLoading ? <Loading /> : (
    <div>
        <div className='grid grid-cols-4'>
            {movies.map((movie)=>{
                    return (
                        <div className='border-black rounded-2xl shadow-lg w-60 m-10  pb-4'>
                            {/* <h1>{movie.original_title}</h1> */}
                            <div className=' shadow-black   overflow-hidden rounded-t-lg flex justify-center'>
                                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /> : <img src={'/static/images/no-image-icon.png'} />
                                }
                            </div>
                            <div className='mt-4 px-4'>
                                <h1 className='text-xl dark:text-gray-300 font-semibold'>{movie.original_title}</h1>
                                <p className='line-clamp-3 dark:text-gray-400'>{movie.overview}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default MovieCatalogue