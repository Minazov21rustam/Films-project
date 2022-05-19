import React from "react";
import { useDispatch } from "react-redux";
import "./MovieItem.css";
import { ADD_FAV } from "../../redux-manager/constants";

function MovieItem(props) {
    const { Title, Year, Poster} = props;
  const dispatch = useDispatch();
  const writeToFav = () => {
    dispatch({type: ADD_FAV,payload: props})
  };
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button type="button" className="movie-item__add-button" onClick={writeToFav}>
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default MovieItem;
