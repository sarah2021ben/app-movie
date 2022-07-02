import React from "react";
import MovieList from "../../Componenets/MovieList/MovieList";
import './Home.css'

function Home({ movies, favoriteComponent, handleFavouriteClick }) {
  return (
    <>
        <h1 className="home-title"> Découvrez notre séléction de cette semaine </h1>
        <div className="movie-cards-bloc d-flex">
      <MovieList
        movies={movies}
        className="image-container"
        favoriteComponent={favoriteComponent}
        handleFavouriteClick={handleFavouriteClick}
      />
      </div>
    </>
  );
}

export default Home;
