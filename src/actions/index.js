import axios from 'axios';

export function loadData() {
  return function(dispatch) {
    dispatch(loadDataStarted());
    axios
      .get('https://pony-api-sanavoowah.now.sh/pony/')
      .then(data => dispatch(loadDataSuccess(data)))
      .catch(error => dispatch(loadDataFailed(error)));
  };
}

export function loadDataStarted() {
  return {
    type: 'LOAD_DATA_STARTED'
  };
}
export function loadDataSuccess(data) {
  // Display data in console
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  };
}
export function loadDataFailed(error) {
  // Display error in console
  return {
    type: 'LOAD_DATA_FAILED',
    error
  };
}

// action creator pour le post ? Update ? Delete ?
export function postData(name) {
  return function(dispatch) {
    dispatch(postDataStarted());
    axios
      .post('https://pony-api-sanavoowah.now.sh/pony/')
      .then(data => dispatch(postDataSuccess(data)))
      .catch(error => dispatch(postDataFailed(error)));
  };
}

export function postDataStarted() {
  return {
    type: 'POST_DATA_STARTED'
  };
}
export function postDataSuccess(data) {
  // Display data in console
  return {
    type: 'POST_DATA_SUCCESS',
    data
  };
}
export function postDataFailed(error) {
  // Display error in console
  return {
    type: 'POST_DATA_FAILED',
    error
  };
}

/*
export const createPony = name => {
  // Id deducted from the state in reducers
  return {
    type: 'CREATE_PONY',
    name
  };
};

export const deletePony = id => {
  return {
    type: 'DELETE_PONY',
    id
  };
};

export const updatePony = (id, name) => {
  return {
    type: 'UPDATE_PONY',
    id,
    name
  };
};
*/
