import { SET_MOVIE } from "../constants";

const initialValues = {
  cartFilms: [],
};

const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return { ...state, cartFilms: action.payload };
    // case DELETE_MOVIE:
    //   return {
    //     ...state,
    //     cartFilms: state.cartFilms.filter((film) => film.id !== action.payload),
    //   };

    default:
      return state;
  }
};

export default cartReducer;
