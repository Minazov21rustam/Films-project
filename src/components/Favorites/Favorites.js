import React, { useState } from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { saveFavFilmsSelector } from "../../redux-manager/favMovies/selector";
import {
  deleteFavMoviesAction,
  saveListAction,
} from "../../redux-manager/favMovies/actions";

import { Link, Route } from "react-router-dom";

function Favorites(props) {
  const { Title, Year, Poster } = props;
  const [title, setTitle] = useState("Новый список");
  const [active, setActive] = useState(false);

  const favMovies = useSelector(saveFavFilmsSelector);
  const dispatch = useDispatch();
  const buttonDelete = (id) => {
    dispatch(deleteFavMoviesAction(id));
  };

  const buttonSaver = () => {
    setActive(true);
    dispatch(saveListAction({ title, favMovies }));
    console.log(title, favMovies,"hello")
  };
  return (
    <div className="favorites">
      <input
        placeholder={Title}
        onChange={(e) => setTitle(e.target.value)}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {favMovies?.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
              <button onClick={() => buttonDelete(item.imdbID)}>x</button>
            </li>
          );
        })}
      </ul>
      {active ? (
        <Link to="/list/:id">Перейти к списку</Link>
      ) : (
        <button
          onClick={buttonSaver}
          title={Title}
          type="button"
          className="favorites__save"
        >
          Сохранить список
        </button>
      )}
    </div>
  );
}

export default Favorites;
