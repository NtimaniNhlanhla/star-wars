import React from 'react'
import './MovieItem.css'

function MovieItem(props: {movie: any}) {

    const { movie } = props;
  return ( 
    <div className="item">
        <h2 className="item-title">{movie.title}</h2>
        <div>{movie.opening_crawl}</div>
  </div>
  )
}

export default MovieItem