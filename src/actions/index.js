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
  return {
    type: 'POST_DATA_SUCCESS',
    id,
    name
  };
}
export function postDataFailed(error) {
  return {
    type: 'POST_DATA_FAILED',
    error
  };
}

export function deleteData(id) {
  return function(dispatch) {
    axios
      .delete('https://pony-api-sanavoowah.now.sh/pony/', { id }) // check url and parameters
      .then(() => dispatch(deleteDataSuccess(id)))
      .catch(error => dispatch(deleteDataFailed(error)));
  };
}

export function deleteDataSuccess(id) {
  return {
    type: 'DELETE_DATA_SUCCESS',
    id
  };
}
export function deleteDataFailed(error) {
  return {
    type: 'DELETE_DATA_FAILED',
    error
  };
}

export function updateData(id, name) {
  return function(dispatch) {
    axios
      .put('https://pony-api-sanavoowah.now.sh/pony/', { id, name }) // check url and parameters
      .then(() => dispatch(updateDataSuccess(id, name)))
      .catch(error => dispatch(updateDataFailed(error)));
  };
}

export function updateDataSuccess(id) {
  return {
    type: 'UPDATE_DATA_SUCCESS',
    id
  };
}
export function updateDataFailed(error) {
  return {
    type: 'UPDATE_DATA_FAILED',
    error
  };
}
