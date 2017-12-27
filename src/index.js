import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadPoniesReducer } from './reducers';
import { loadData } from './actions/index';

const reducers = {
  ponies: loadPoniesReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(loadData());

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
