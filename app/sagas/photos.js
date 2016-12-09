import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { PHOTOS_FETCH_REQUESTED, fetchSucceeded, fetchFailed } from '../actions/photos';
import webApi from '../libs/webApi';

// Handlers Sagas
function* fetchRequestHandler({ payload }) {
  try {
    const photos = yield call(webApi.fetchPhotos(payload.page));
    yield put(fetchSucceeded({
      list: photos,
      page: payload.page,
    }));
  } catch (e) {
    yield put(fetchFailed(e));
  }
}

// Watchers Sagas
function* watchFetchRequests() {
  yield takeLatest(PHOTOS_FETCH_REQUESTED, fetchRequestHandler);
}

// Composed saga
export default function* watchers() {
  yield [
    watchFetchRequests(),
  ];
}
