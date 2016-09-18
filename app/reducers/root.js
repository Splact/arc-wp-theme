import { combineReducers } from 'redux';
import appReducer from './app';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  app: appReducer,
  settings: settingsReducer,
});

export default rootReducer;
