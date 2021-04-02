import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import seedReducer from './reducers/seedReducer'
import userReducer from './reducers/userReducer'
import gardenReducer from './reducers/gardenReducer'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk';
import reduceReducers from 'reduce-reducers';
import { BrowserRouter as Router } from 'react-router-dom'


const initialState = {}
const reducer = reduceReducers(initialState, seedReducer, userReducer, gardenReducer, authReducer);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
