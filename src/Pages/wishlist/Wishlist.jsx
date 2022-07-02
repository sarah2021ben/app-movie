import React from "react";
import MovieList from "../../Componenets/MovieList/MovieList";

function Wishlist({favourite,favoriteComponent, handleFavouriteClick}) {
  return (
    <>
      <h1 className="home-title">
        {" "}
        Vos favourites films et séries {" "}
      </h1>
      <div className="movie-cards-bloc d-flex">
        <MovieList
          movies={favourite}
          className="image-container"
           favoriteComponent={favoriteComponent}
           handleFavouriteClick={handleFavouriteClick}
        />
      </div>
    </>
  );
}

export default Wishlist;
