import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import "./MoviesList.css";

const MoviesList = (props : {movies: any}) => {

  const { movies } = props;

  return (
    <div>
      <div className="items-container">
        {movies &&
          movies.length > 0 &&
          movies.map((movie: any) => (
            <Link className="link" to={`/moviedetails/${movie.episode_id}`}>
                 <MovieItem key={movie.episode_id} movie={movie} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
