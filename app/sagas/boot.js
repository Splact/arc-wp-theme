import { take, race, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { LOAD } from 'redux-storage';
import { SETTINGS_FETCH_SUCCEEDED, SETTINGS_FETCH_FAILED, fetch } from '../actions/settings';
import { APP_BOOT_REQUESTED, bootSucceeded, bootFailed } from '../actions/app';
import config from '../config';

// Watchers Sagas
function* watchAppBoot() {
  while (true) {
    // Wait for App component cwm and redux storage load
    yield [
      take(APP_BOOT_REQUESTED),
      take(LOAD),
    ];

    // Fetch settings data
    yield put(fetch());

    const { succeeded, timeout } = yield race({
      succeeded: take(SETTINGS_FETCH_SUCCEEDED),
      failed: take(SETTINGS_FETCH_FAILED),
      timeout: call(delay, config.api.timeout),
    });

    if (succeeded) {
      yield put(bootSucceeded());
    } else if (timeout) {
      yield put(bootFailed({
        message: 'Settings fetch timeout',
      }));
    } else {
      yield put(bootFailed({
        message: 'Settings fetch failed',
      }));
    }
  }
}

// Composed saga
export default function* watchers() {
  yield [
    watchAppBoot(),
  ];
}
