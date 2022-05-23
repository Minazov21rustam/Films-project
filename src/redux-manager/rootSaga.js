import { all, call } from "redux-saga/effects";
import cartSaga from "./movies/saga";
import favSaga from "./favMovies/saga";

function* rootSaga() {
  yield all([call(cartSaga), call(favSaga)]);
}

export default rootSaga;
