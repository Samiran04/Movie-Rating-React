import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const logger = ({dispatch, getState}) => (next) => (action) => {
    if(typeof action !== 'function'){
        console.log('ACTION_TYPE', action.type);
    }
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
