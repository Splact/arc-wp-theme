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
  svgLogo: null,
  theme: null,
  welcomePageBackground: null,
  welcomePageOverlayColor: null,
  welcomePageOverlayOpacity: null,

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
    const {
      name,
      description,
      svgLogo,
      theme,
      welcomePageBackground,
      welcomePageOverlayColor,
      welcomePageOverlayOpacity,
    } = payload;

    return {
      ...state,
      name,
      description,
      svgLogo,
      theme,
      welcomePageBackground,
      welcomePageOverlayColor,
      welcomePageOverlayOpacity,
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
