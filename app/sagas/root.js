import bootSagas from './boot';
import settingsSagas from './settings';
import photosSagas from './photos';

export default function* root() {
  yield [
    bootSagas(),
    settingsSagas(),
    photosSagas(),
  ];
}
