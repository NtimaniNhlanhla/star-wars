import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MoviesList from "./components/MoviesList/MoviesList";
import SearchBox from "./components/SearchBox/SearchBox";


function App() {

  
const [movie, setMovie] = useState({
  movies: [],
  searchField: ''
});

const onSearchChange = (event: any) => {
  event.preventDefault();
  setMovie({...movie, searchField: event.target.value})
//  console.log(`#### Search Movies ${JSON.stringify(filteredMovies)}`)
}

const filteredMovies = movie.movies.filter((item: any) => {
  return item.title.toLowerCase().includes(movie.searchField.toLowerCase())
})

useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/movies`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie({  ...movie, movies: data.data.results });
      });     
},[])

  return (
    <Router>
        <div>
          <header className="App-header">STAR WARS MOVIES</header>
        
          <div className="content">
          <Routes>
              <Route path="/" element={
                <>
                   <SearchBox searchChange={onSearchChange} />
                   <MoviesList movies={filteredMovies} />
                </>
              } />
              <Route path="/moviedetails/:episode_id" element={<MovieDetails  />} />
          </Routes>
          </div>
        
        </div>
    </Router>
  );
}

export default App;
