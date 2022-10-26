import React from 'react'

const MovieDisplay = ({ movie }) => {
  // const { movie } = props;
  console.log(movie);
  return (
    <div>
      MovieDisplay
    
      {/* Title */}
      <h4>{ movie.Title}</h4>
      {/* Genre */}
      <h4>{movie.Genre}</h4>
      {/* Poster image */}
      <img src={ movie.Poster} alt="" />
      {/* Year */}
      <h4>{movie.Year}</h4>
      <p>{ movie.Plot}</p>
    </div>
  )
  

}

export default MovieDisplay