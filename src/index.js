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
import thunk from 'redux-thunk';
// import { createBrowserHistory } from 'history';

// export const browserHistory = createBrowserHistory();

const store = createStore((seedReducer, userReducer), composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
