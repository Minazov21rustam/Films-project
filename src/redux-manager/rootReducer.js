import { combineReducers } from "redux";
import cartReducer from "./movies/reducer";
import favReducer from './favMovies/reducer'

const rootReducer = combineReducers({ cartReducer, favReducer });

export default rootReducer;
