import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import myStore from './Reduxstore/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={myStore}>
    <App />
  </Provider>

);
// {mystore} is the Redux store you have created (or configured), 
// and <App /> is the root component of your React application. 
// By wrapping <App /> with the {Provider} component and passing the store as a "prop",
// all components within <App /> can access the Redux store.

// Multiple store--> If we want to impliment mul stores we have mention obj Ex:- store={{myStore, mysecondStore}}

// reportWebVitals();
