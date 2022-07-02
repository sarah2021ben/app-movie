import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./Componenets/MovieList/MovieList";
import { useDispatch } from "react-redux";
import NavbarCom from "./Componenets/NavBar/NavbarCom";
import Home from "./Pages/Home/Home";
import AddFavourite from "./Componenets/AddFavourite/AddFavourite";
import Wishlist from "./Pages/wishlist/Wishlist";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const [searchValue, setSerachValue] = useState("harry potter");
  const apiUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=71743d8`;
  const getMovies = async () => {
    const response = await axios.get(apiUrl);
    if (response.data.Search) {
      setMovies(response.data.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  const searchValueChange = (value) => {
    setSerachValue(value);
  };
  const addFavouriteMovie = (movie) => {
   dispatch( AddFavourite(movie))
  };
  return (
    <div className="container-fluid m-app">
      <NavbarCom
        searchValue={searchValue}
        searchValueChange={searchValueChange}
      />

      <div className="">
      <Routes>
        <Route path="/" element={<Home
          movies={movies}
          className="image-container"
          favoriteComponent={AddFavourite}
          handleFavouriteClick={addFavouriteMovie}
        />}/>
        <Route path="/wishlist" element={<Wishlist
           
           className="image-container"
           favoriteComponent={AddFavourite}
           handleFavouriteClick={addFavouriteMovie}
        />}/>
        
       
        
       </Routes>
      </div>
    </div>
  );
}

export default App;
