import React, { useState } from "react";
import Card from "./Components/Card.jsx";
import Loading from "./Components/Loading.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieDropDown from './Components/MovieDropDown.jsx';






const App = () => {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  

  const API_KEY = "9c02f80c8c653f4fb5d34218a0b75a12"; 
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

  

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (!query.trim()) return; 

    try {
      setLoading(true);
      setError("");

      
      const response = await fetch(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      setData(data.results);
      setLoading(false);
      console.log(data)
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
      setLoading(false);
      
    }
  };

  return (
    

    <>
   
 <div className=" mt-5 mb-5">
      
      <div className="contain2"> 
        <h1>Welcome.</h1>
      <h2>Millions of movies.Explore Now!</h2>

      </div>
     
      </div>

    <div className="contain ">
      
<form onSubmit={handleSearch} className="">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          </div>
          <div className="btn-group">
       <button type="submit" className="btn btn-warning">
            Search
          </button>
          </div>
        
    </form>

   
      {loading && <Loading />}
      {error && <p className="text-danger text-center">{error}</p>}
      <div className=" card1">
        {data.length > 0 ? (
          data.map((movie) => (
            <div className="" key={movie.id}>
              <Card
                title={movie.title}
                image={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                description={movie.overview}
              />
            </div>
          ))
        ) : (
          <p className=" para ">Try searching for movies.</p>
        )}
      </div>

     
    </div>
   
    <MovieDropDown />
  
    </>
  );
};

export default App;