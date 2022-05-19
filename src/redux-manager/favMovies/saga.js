import { takeEvery, put, call, select } from "redux-saga/effects";
import { SAVE_LIST } from "../constants";
import { saveListAction } from "./actions";
import { saveFetch } from "../REST";

function* workerCart(action) {
  try {
    const data = yield call(saveFetch, action.payload);
    yield put(saveListAction(data.Search));
    // yield select(getCartFilmsSelector);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SAVE_LIST, workerCart);
}