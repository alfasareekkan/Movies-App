import React from 'react'
import './Card.css'

function Card({data,handleMovieClick}) {
  return (
      <div key={data._id} onClick={()=>handleMovieClick(data._id)}>
          <img src={data.Poster} alt="" />
          <h5>{ data.Title}</h5>
    </div>
  )
}

export default Card