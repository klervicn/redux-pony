import axios from 'axios';
import * as url from 'url';
import types from '../types';
const baseUrl = 'https://my-pony-api-vmgex73fz7i6.runkit.sh/pony/';

export function deleteData(id) {
  return function(dispatch) {
    dispatch(deleteDataStarted());
    return axios
      .delete(url.resolve(baseUrl, id.toString()))
      .then(() => dispatch(deleteDataSuccess(id)))
      .catch(error => dispatch(deleteDataFailed(error)));
  };
}
function deleteDataStarted() {
  return {
    type: types.DELETE_DATA_STARTED
  };
}
function deleteDataSuccess(id) {
  return {
    type: types.DELETE_DATA_SUCCESS,
    id
  };
}
function deleteDataFailed(error) {
  return {
    type: types.DELETE_DATA_FAILED,
    error
  };
}

export function updateData(id, name) {
  return function(dispatch) {
    dispatch(updateDataStarted());
    return axios
      .put(url.resolve(baseUrl, id.toString()), { id, name })
      .then(() => dispatch(updateDataSuccess(id, name)))
      .catch(error => dispatch(updateDataFailed(error)));
  };
}
function updateDataStarted() {
  return {
    type: types.UPDATE_DATA_STARTED
  };
}
function updateDataSuccess(id, name) {
  return {
    type: types.UPDATE_DATA_SUCCESS,
    id,
    name
  };
}
function updateDataFailed(error) {
  return {
    type: types.UPDATE_DATA_FAILED,
    error
  };
}
