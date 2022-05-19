import { GET_MOVIE, DELETE_MOVIE, SET_MOVIE } from "../constants";

export const getMoviesAction = (movie) => ({ type: GET_MOVIE, payload: movie });
export const setMoviesAction = (movie) => ({ type: SET_MOVIE, payload: movie });

export const deleteMoviesAction = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});
