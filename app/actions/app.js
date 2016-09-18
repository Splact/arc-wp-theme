import { createAction } from 'redux-actions';

// defining action types
export const APP_BOOT_REQUESTED = 'APP_BOOT_REQUESTED';
export const APP_BOOT_SUCCEEDED = 'APP_BOOT_SUCCEEDED';
export const APP_BOOT_FAILED = 'APP_BOOT_FAILED';

// defining actions
export const boot = createAction(APP_BOOT_REQUESTED);
export const bootSucceeded = createAction(APP_BOOT_SUCCEEDED);
export const bootFailed = createAction(APP_BOOT_SUCCEEDED);
