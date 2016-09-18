import { handleActions } from 'redux-actions';
import {
  SETTINGS_FETCH_REQUESTED,
  SETTINGS_FETCH_SUCCEEDED,
  SETTINGS_FETCH_FAILED,
} from '../actions/settings';

// define initial state
const defaultState = {
  name: 'Arc',
  description: null,

  isLoading: false,
  error: null,
};

const reducerMap = {
  [SETTINGS_FETCH_REQUESTED]: state => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [SETTINGS_FETCH_SUCCEEDED]: (state, { payload }) => {
    const { name, description } = payload;

    return {
      ...state,
      name,
      description,
      isLoading: false,
    };
  },
  [SETTINGS_FETCH_FAILED]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
};

export default handleActions(reducerMap, defaultState);
