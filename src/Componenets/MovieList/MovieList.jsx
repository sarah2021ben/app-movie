import React from "react";
import "./MovieList.css";

function MovieList({ movies, favoriteComponent, handleFavouriteClick }) {
  const AddFavouriteComponent = favoriteComponent;
  return (
    <>
      {movies.map((movie, index) => (
        <div
          key={movie.imdbID}
          className="d-flex justify-content-start m-6 mb-3 image-container"
        >
          <img src={movie.Poster} alt={movie.Title} />
         
          <div
            onClick={() => handleFavouriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-item"
          >
             
            <AddFavouriteComponent  />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
