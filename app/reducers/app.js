import { handleActions } from 'redux-actions';
import {
  APP_BOOT_REQUESTED,
  APP_BOOT_SUCCEEDED,
  APP_BOOT_FAILED,
} from '../actions/app';

// define initial state
const defaultState = {
  isReady: false,
  isBooting: false,
  error: null,
};

const reducerMap = {
  [APP_BOOT_REQUESTED]: state => ({
    ...state,
    isBooting: true,
    error: null,
  }),
  [APP_BOOT_SUCCEEDED]: state => ({
    ...state,
    isReady: true,
    isBooting: false,
  }),
  [APP_BOOT_FAILED]: (state, { payload }) => ({
    ...state,
    isReady: false,
    isBooting: false,
    error: payload,
  }),
};

export default handleActions(reducerMap, defaultState);
