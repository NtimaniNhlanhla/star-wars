import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './MovieDetails.css'

function MovieDetails() {
    const [movie, setMovie] = useState<any>({});
    const { episode_id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/movies/${episode_id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMovie(data.data);
        });
    },[])
    
  return (
    <div className='movie-container'>
        <Link to={'/'}>Go Home</Link>
        <h2>{movie.title}</h2>
        <p>{movie.opening_crawl}</p>
        <p>
            <span className='heading'>Director:</span> { movie.director}
        </p>
        <p>
        <span className='heading'>Producer:</span>  { movie.producer}
        </p>
        <p>
        <span className='heading'>Release Date:</span>   { movie.release_date}
        </p>
    </div>
  )
}

export default MovieDetails