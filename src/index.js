import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore,applyMiddleware  } from "redux";
import rootReducer from "./reducers";
import Root from './routes/Root';
import * as serviceWorker from './serviceWorker';

function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk,logger));
    return store;
}


ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
