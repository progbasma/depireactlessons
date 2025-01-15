import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './lesson1/Nav';
import App from './lesson1/App';
import Headerc from './lesson1/Headerc';
import Footerc from './lesson1/Footerc';
import Shoppingcart from './lesson2/Shoppingcart';
import Cartproduct from './lesson2/cartproduct';

const root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Shoppingcart/>
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
