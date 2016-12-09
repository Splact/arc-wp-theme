import { combineReducers } from 'redux';
import appReducer from './app';
import settingsReducer from './settings';
import photosReducer from './photos';

const rootReducer = combineReducers({
  app: appReducer,
  settings: settingsReducer,
  photos: photosReducer,
});

export default rootReducer;
