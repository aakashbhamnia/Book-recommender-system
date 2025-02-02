import { useState,useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

import Moviecard  from "./MovieCard";



const API_URL = "https://www.omdbapi.com?apikey=a114436a";

const movie1 = {
  Title: "Spiderman the Verse",
  Year: "2019–",
  imdbID: "tt12122034",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
};

const App = () => {

  const [movies, setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MoviezSearch</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
        src={SearchIcon}
         alt="search"
         onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies.length>0
        ?(
          <div className="container">
            {movies.map((movie)=>(
              <Moviecard movie={movie} />
            ))}
        </div>
        ):(
          <div className="empty">
            <h2>no movies found</h2>

            </div>
        )

      }

      
    </div>
  );
}

export default App;
