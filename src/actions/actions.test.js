/*import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import types from '../types';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/ponies', {
      body: { ponies: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
*/
