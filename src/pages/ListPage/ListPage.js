import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { saveFavFilmsSelector } from "../../redux-manager/favMovies/selector";

function ListPage() {
  const params = useParams();
  // useEffect(() => {
  //   console.log(params?.id);
  // });

  const favMovies = useSelector(saveFavFilmsSelector);
  // localStorage.setItem("object", JSON.stringify(favMovies));
  // let newObject = [ ...JSON.parse(localStorage.getItem("object")) ];
  // console.log(newObject)
  return (
    <div className="list-page">
      <h1 className="list-page__title">MY SPISOK</h1>
      <ul>
        {favMovies?.map((item) => {
          return (
            <li key={item.imdbID}>
              <a href="https://www.imdb.com/title/`tt0068646/" target="_blank">
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
