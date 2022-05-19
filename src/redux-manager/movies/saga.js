import { takeEvery, put, call } from "redux-saga/effects";
import { GET_MOVIE } from "../constants";
import { setMoviesAction } from "./actions";
import { fetchMovie } from "../REST";

function* workerCart(action) {
  try {
    const data = yield call(fetchMovie, action.payload);
    yield put(setMoviesAction(data.Search));
    // yield select(getCartFilmsSelector);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(GET_MOVIE, workerCart);
}
