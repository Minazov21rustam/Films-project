import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ListPage.css";
// import { saveListAction } from "../../redux-manager/favMovies/actions";
import { useSelector } from "react-redux";
import { saveFavFilmsSelector } from "../../redux-manager/favMovies/selector";

function ListPage() {
  const params = useParams();
  const favMovies = useSelector(saveFavFilmsSelector);
  useEffect(() => {
    console.log(params?.id);
  });
  return (
    <div className="list-page">
      <h1 className="list-page__title">MY SPISOK</h1>
      <ul>
        {favMovies?.map((item) => {
          return (
            <li key={item.imdbID}>
              <a href="https://www.imdb.com/title/tt0068646/" target="_blank">
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListPage;
