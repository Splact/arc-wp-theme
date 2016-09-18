import { createAction } from 'redux-actions';

// defining action types
export const SETTINGS_FETCH_REQUESTED = 'SETTINGS_FETCH_REQUESTED';
export const SETTINGS_FETCH_SUCCEEDED = 'SETTINGS_FETCH_SUCCEEDED';
export const SETTINGS_FETCH_FAILED = 'SETTINGS_FETCH_FAILED';

// defining actions
export const fetch = createAction(SETTINGS_FETCH_REQUESTED);
export const fetchSucceeded = createAction(SETTINGS_FETCH_SUCCEEDED, settings => settings);
export const fetchFailed = createAction(SETTINGS_FETCH_FAILED, error => error);
