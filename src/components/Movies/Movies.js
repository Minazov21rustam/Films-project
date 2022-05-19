import React from "react";
import { useSelector } from "react-redux";
// import {
//   getMoviesAction,
//   deleteMoviesAction,
// } from "../../redux-manager/movies/actions";
import { getCartFilmsSelector } from "../../redux-manager/movies/selectors";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

function Movies() {
  const movies = useSelector(getCartFilmsSelector);
  return (
    <ul className="movies">
      {movies?.map((movie, key) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

export default Movies;
