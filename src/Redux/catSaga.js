import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { getCatSuccess } from "./catState";
import { getImageSuccess } from "./ImageState";

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  // console.log(cats);
  const formattedcats = yield cats.json();
  // const trimmed = formattedcats.slice(0, 10);

  yield put(getCatSuccess(formattedcats));
}
function* workGetImage() {
  const images = yield call(() =>
    fetch("https://picsum.photos/v2/list?page=5&limit=50")
  );
  const formateImage = yield images.json();

  yield put(getImageSuccess(formateImage));
}

function* Saga() {//watcher function
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
  yield takeLatest("images/getImageFetch", workGetImage);
}
export default Saga;
