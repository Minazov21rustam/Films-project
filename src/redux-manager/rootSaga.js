import { all, call } from "redux-saga/effects";
import cartSaga from "./movies/saga";

function* rootSaga() {
  yield all([call(cartSaga)]);
}

export default rootSaga;
