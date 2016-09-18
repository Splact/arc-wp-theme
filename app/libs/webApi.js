import fetch from 'isomorphic-fetch';
import config from '../config';

class WebApi {
  constructor() {
    this.authToken = null;

    // bind methods
    this.call = this.call.bind(this);
  }

  responseHandler(response) {
    if (response.status >= 300) {
      return Promise.reject(response);
    }

    return response.json().then(data => data);
  }
  errorHandler(response) {
    let error;

    if (response instanceof Error) {
      error = {
        status: 500,
        message: response.message,
      };
    } else if (!response) {
      error = {
        status: 500,
        message: 'No response received.',
      };
    } else if (response.status >= 300) {
      error = {
        status: response.status,
        message: response.statusText,
      };
    } else {
      error = {
        status: 500,
        message: 'Something goes wrong in the communication flow',
      };
    }

    throw error;
  }

  preRequest(arg) {
    return Promise.resolve(arg);
  }
  authenticate(arg) {
    return Promise.resolve(arg);
  }
  postRequest(arg) {
    return Promise.resolve(arg);
  }

  call(request, isAuthenticationRequired = false) {
    // start the call promise with pre request promise
    let callPromise = this.preRequest();

    // require authentication if needed
    if (isAuthenticationRequired) {
      callPromise = callPromise.then(this.authenticate);
    }

    // add "request" as core functionality into promise
    callPromise = callPromise.then(request);

    // add post request promise
    callPromise = callPromise.then(this.postRequest);

    // end promise with response and error handlers
    callPromise = callPromise
      .then(this.responseHandler)
      .catch(this.errorHandler);

    return callPromise;
  }

  // public methods
  fetchSettings() {
    const request = () => fetch(`${config.api.baseURL}/settings`);

    return this.call.bind(this, request, false);
  }
}

export default new WebApi();
