import { DELETE_FAV, SAVE_LIST, GET_LIST } from "../constants";

export const deleteFavMoviesAction = (id) => ({
  type: DELETE_FAV,
  payload: id,
});

export const saveListAction = (payload) => ({
  type: SAVE_LIST,
  payload,
});

export const getListAction = (payload) => ({
  type: GET_LIST,
  payload,
});
