import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

const MovieDropDown= () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const API_KEY = "9c02f80c8c653f4fb5d34218a0b75a12";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const GENRE_MAPPING = {
    Romance: 10749,
    Adventure: 12,
    Action: 28,
  };

 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
   

    fetchMovies();
    
  }, []);

 
  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(GENRE_MAPPING[selectedGenre]))
    : movies;

  return (
    <div>
      <div className="dropdown">
        
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">All Movies</option>
          <option value="Romance">Romance</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            description={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieDropDown;