import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from './Card.jsx';


const GetMovies = () => {
  const [mmovies, setMmovies]=useState([]);
  
  const API_KEY ='9c02f80c8c653f4fb5d34218a0b75a12'
  const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${'9c02f80c8c653f4fb5d34218a0b75a12'}&language=en-US&page=1`

   useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${'9c02f80c8c653f4fb5d34218a0b75a12'}&language=en-US&page=1`)

    .then(response=>
      setMmovies(response.data.results)
    )
.catch(error=>
  console.error('error fetching, error')

)
 }, [])



  return (
    <>
   
 
  <div className='img2'>
    {mmovies.map((movie=>(
      <div key={movie.id} >
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
    )))}
  </div>
 
 
 </>
  )
}

export default GetMovies