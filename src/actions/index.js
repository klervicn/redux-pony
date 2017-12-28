import axios from 'axios';
import * as url from 'url';
const baseUrl = 'https://my-pony-api-vmgex73fz7i6.runkit.sh/pony/';
const MAX_ID = 1000000000;

export function loadData() {
  return function(dispatch) {
    dispatch(loadDataStarted());

    return axios
      .get(baseUrl)
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

export function postData(name) {
  return function(dispatch) {
    const nextId = Math.floor(Math.random() * MAX_ID);
    return axios
      .post(baseUrl, { id: nextId, name })
      .then(() => dispatch(postDataSuccess(nextId, name)))
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
    return axios
      .delete(url.resolve(baseUrl, id.toString()))
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
    return axios
      .put(url.resolve(baseUrl, id.toString()), { id, name })
      .then(() => dispatch(updateDataSuccess(id, name)))
      .catch(error => dispatch(updateDataFailed(error)));
  };
}

export function updateDataSuccess(id, name) {
  return {
    type: 'UPDATE_DATA_SUCCESS',
    id,
    name
  };
}
export function updateDataFailed(error) {
  return {
    type: 'UPDATE_DATA_FAILED',
    error
  };
}
