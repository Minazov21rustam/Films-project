import { DELETE_FAV, SAVE_LIST } from "../constants";

export const deleteFavMoviesAction = (id) => ({
  type: DELETE_FAV,
  payload: id,
});

export const saveListAction = (payload) => ({
  type: SAVE_LIST,
  payload,
});
