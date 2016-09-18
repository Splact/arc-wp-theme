import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SETTINGS_FETCH_REQUESTED, fetchSucceeded, fetchFailed } from '../actions/settings';
import webApi from '../libs/webApi';

// Handlers Sagas
function* fetchRequestHandler() {
  try {
    const settings = yield call(webApi.fetchSettings());
    yield put(fetchSucceeded(settings));
  } catch (e) {
    yield put(fetchFailed(e));
  }
}

// Watchers Sagas
function* watchFetchRequests() {
  yield takeLatest(SETTINGS_FETCH_REQUESTED, fetchRequestHandler);
}

// Composed saga
export default function* watchers() {
  yield [
    watchFetchRequests(),
  ];
}
