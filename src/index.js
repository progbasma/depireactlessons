import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Counter from './lesson3/Counter.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './lesson3/About';
import Contact from './lesson3/Contact';
import Posts from './lesson3/Posts';
import Notfoundpage from './lesson3/Notfound';
import Caro from './lesson3/Caro.jsx';

import NavC from './lesson3/Nav.jsx';
import Dashboardlayout from './lesson4/layout/Dashboardlayout.jsx';
import Homedash from './lesson4/Homedash';
import Postsdash from './lesson4/Postsdash';
import Productsdash from './lesson4/Productsdash';
import Usersdash from './lesson4/Usersdash';
import Protectedroute from './lesson4/Protectedroute.jsx';



const root = ReactDOM.createRoot(document.getElementById('root2'));
//const user=null;
const user={username:"ahmed"};
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavC />
    <Routes>

      <Route index element={<Counter />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/posts/:id?" element={<Posts />} />
      
      <Route path="/*" element={<Notfoundpage />} />
      <Route path="/carousel" element={<Caro/>} />
      <Route path="/dashboard" element={
        <Protectedroute user={user}>
          <Dashboardlayout/>
        </Protectedroute>
        
        } >
        <Route index element={<Homedash/>} />
        <Route path='users' element={<Usersdash/>} />
        <Route path='posts' element={<Postsdash/>} />
        <Route path='products' element={<Productsdash />} />
      </Route>

     

    </Routes>
  </BrowserRouter>
   


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
