import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './lesson3/Nav.jsx';
import Counter from './lesson3/Counter.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './lesson3/About';
import Contact from './lesson3/Contact';
import Posts from './lesson3/Posts';
import Notfoundpage from './lesson3/Notfound';
import Caro from './lesson3/Caro.jsx';



const root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Nav />
    <Routes>

      <Route index element={<Counter />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/posts/:id?" element={<Posts />} />
      
      <Route path="/*" element={<Notfoundpage />} />
      <Route path="/carousel" element={<Caro/>} />

    </Routes>
  </BrowserRouter>
   


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
