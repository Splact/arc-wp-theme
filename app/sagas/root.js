import bootSagas from './boot';
import settingsSagas from './settings';

export default function* root() {
  yield [
    bootSagas(),
    settingsSagas(),
  ];
}
