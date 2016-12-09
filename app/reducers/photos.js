import { handleActions } from 'redux-actions';
import {
  PHOTOS_FETCH_REQUESTED,
  PHOTOS_FETCH_SUCCEEDED,
  PHOTOS_FETCH_FAILED,
} from '../actions/photos';

// define initial state
const defaultState = {
  list: [],
  fetchedPage: null,
  isLoading: false,
  error: null,
};

const reducerMap = {
  [PHOTOS_FETCH_REQUESTED]: state => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [PHOTOS_FETCH_SUCCEEDED]: (state, { payload }) => {
    const {
      list,
      page,
    } = payload;

    return {
      ...state,
      list,
      fetchedPage: page,
      isLoading: false,
      error: null,
    };
  },
  [PHOTOS_FETCH_FAILED]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
};

export default handleActions(reducerMap, defaultState);
