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
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  };
}
export function loadDataFailed(error) {
  return {
    type: 'LOAD_DATA_FAILED',
    error
  };
}

export function postData(id, name) {
  return function(dispatch) {
    axios
      .post('https://pony-api-sanavoowah.now.sh/pony/', { id, name })
      .then(() => dispatch(postDataSuccess(id, name)))
      .catch(error => dispatch(postDataFailed(error)));
  };
}

export function postDataSuccess(id, name) {
  // Display data in console
  return {
    type: 'POST_DATA_SUCCESS',
    id,
    name
  };
}
export function postDataFailed(error) {
  // Display error in console
  return {
    type: 'POST_DATA_FAILED',
    error
  };
}

export function deleteData(id) {
  return function(dispatch) {
    axios
      .delete('https://pony-api-sanavoowah.now.sh/pony/', { id })
      .then(() => dispatch(deleteDataSuccess(id)))
      .catch(error => dispatch(deleteDataFailed(error)));
  };
}

export function deleteDataSuccess(id) {
  // Display data in console
  return {
    type: 'DELETE_DATA_SUCCESS',
    id
  };
}
export function deletetDataFailed(error) {
  // Display error in console
  return {
    type: 'DELETE_DATA_FAILED',
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
