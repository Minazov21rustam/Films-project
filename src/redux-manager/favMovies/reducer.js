import { ADD_FAV, DELETE_FAV, SAVE_LIST, GET_LIST } from "../constants";

const initialValues = {
  favFilms: [],
};

const favReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, favFilms: [...state.favFilms, action.payload] };
    case SAVE_LIST:
      return { ...state };
    case GET_LIST:
      return { ...state };
    case DELETE_FAV:
      return {
        ...state,
        favFilms: state.favFilms.filter(
          (film) => film.imdbID !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default favReducer;
