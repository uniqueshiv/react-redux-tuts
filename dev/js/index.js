import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';


const store=createStore(allReducers);// this is the  store which is collection of reducers

ReactDOM.render(
   <Provider store={store} >
      <App />
  </Provider>
   , document.getElementById('root'));
