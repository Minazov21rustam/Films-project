import { takeEvery, call } from "redux-saga/effects";
import { SAVE_LIST } from "../constants";
import { saveFetch } from "../REST";

function* workerCart(action) {
  try {
    const data = yield call(saveFetch, action.payload);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SAVE_LIST, workerCart);
}
