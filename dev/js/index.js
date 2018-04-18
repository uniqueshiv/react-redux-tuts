import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import App from './components/App';

import reduxThunk from 'redux-thunk';


//const store=createStore(allReducers);// this is the  store which is collection of reducers

const store = createStore(allReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
   <Provider store={store} >
      <App />
  </Provider>
   , document.getElementById('root'));
