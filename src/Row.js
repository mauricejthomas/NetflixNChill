import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css'

let theOGURL = 'https://image.tmdb.org/t/p/original/';
function Row({ title, fetchUrl, isLargeRow }) {
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results)
            return request;

        }
        fetchData();

    }, [fetchUrl]);

    console.table(movies)

    return (
        <div> className='row'
            <h2>{title}</h2>
            <div className='row__posters'>
                {/*posters*/}

                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className='row__poster'
                    src={`${theOGURL}${movie.poster_path}`} 
                    alt={movie.name}
                    />
                ))}

            </div>

            {/* title */}
            {/* container -> posters */}

        </div>
    )
}

export default Row

