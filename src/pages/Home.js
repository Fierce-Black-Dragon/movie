import React, { useState, useEffect } from "react";
import "../Style/home.css"
import Movie from "../component/Movies.js";
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();

      setMovies(payload.data);
    }
    getData();
  }, []);
 

  return (
    <div className="home">
    <h1> Top 100 Movies </h1>
    <div className="moviesList" >
     {movies?.map((movie) => {
        return (
          <Movie
            title={movie.original_title}
            status={movie.status}
            key={movie.id}
            vote_average={movie.vote_average}
           id={movie.id}
          />
        );
      })}
    
    
    </div>
    </div>
  );
}

export default Home;
