
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { fetchMovies,selectMovie, fetchMovie } from '../app/action'; 
import Navbar from '../Components/Items/Navbar'
import './Home.css'
import Card from '../Components/Items/Card';

function Home() {
    const movies = useSelector((state) => state.movies);
    const selectedMovie = useSelector((state) => state.selectedMovie);
  const storedMovies = useSelector((state) => state.storedMovies);
    const navigate= useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

    const handleMovieClick = (id) => {
        if (selectedMovie && selectedMovie._id === id) {
          navigate(`/movie/${id}`)
      return;
      }
      
      const storedMovie = storedMovies.find((movie) => movie._id === id);
      if (storedMovie) {
          dispatch(selectMovie(storedMovie));
          navigate(`/movie/${id}`)
          
      } else {
          dispatch(fetchMovie(id));
          navigate(`/movie/${id}`)
          
    }
  };
  return (
      <div>
          <Navbar />
          <div className="section-1">
              {
                  movies?.map((movie) => (
                      <Card data={movie} handleMovieClick={handleMovieClick} />
                  ))
            }
          </div>
    </div>
  )
}

export default Home