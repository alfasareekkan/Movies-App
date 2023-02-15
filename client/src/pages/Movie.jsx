import React from 'react'
import Navbar from '../Components/Items/Navbar';
import { useSelector } from 'react-redux';
import './Movie.css'

function Movie() {
    const selectedMovie = useSelector((state) => state.selectedMovie);
  return (
      <div>
          <Navbar />
          <div className="section-2">
              <img src={selectedMovie?.Images[0]} alt='IMG' />
              <div className="contents">
                  <h1>{selectedMovie?.Title}</h1>
                  <div className="contents-2">
                      <p>{`Released Date : `}</p>
                      <p>{ selectedMovie?.Released}</p>
                  </div>
                  <div className="contents-2">
                      <p>{`Director :`}</p>
                      <p>{ selectedMovie?.Director}</p>
                  </div>
                  <div className="contents-2">
                      <p>{`Actors :`}</p>
                      <p>{ selectedMovie?.Actors}</p>
                  </div>
                  <div className="contents-2">
                      <p>{`Language :`}</p>
                      <p>{ selectedMovie?.Language}</p>
                  </div>
                  <div className="contents-2">
                      <p>{`imdbRating :`}</p>
                      <p>{ selectedMovie?.imdbRating}</p>
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default Movie