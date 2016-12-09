import { createAction } from 'redux-actions';

// defining action types
export const PHOTOS_FETCH_REQUESTED = 'PHOTOS_FETCH_REQUESTED';
export const PHOTOS_FETCH_SUCCEEDED = 'PHOTOS_FETCH_SUCCEEDED';
export const PHOTOS_FETCH_FAILED = 'PHOTOS_FETCH_FAILED';

// defining actions
export const fetch = createAction(PHOTOS_FETCH_REQUESTED);
export const fetchSucceeded = createAction(PHOTOS_FETCH_SUCCEEDED, photos => photos);
export const fetchFailed = createAction(PHOTOS_FETCH_FAILED, error => error);
