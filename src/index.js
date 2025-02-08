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
import Post from './lesson5/Post.jsx';
import Notfoundpage from './lesson3/Notfound';
import Caro from './lesson3/Caro.jsx';

import NavC from './lesson3/Nav.jsx';
import Dashboardlayout from './lesson4/layout/Dashboardlayout.jsx';
import Homedash from './lesson4/Homedash';
import Postsdash from './lesson4/Postsdash';
import Productsdash from './lesson4/Productsdash';
import Usersdash from './lesson4/Usersdash';
import Protectedroute from './lesson4/Protectedroute.jsx';
import Shop from './lesson5/Shop.jsx';
import Blog from './lesson5/Blog.jsx';
import Loginform from './lesson6/Loginform.jsx';
import Registerform from './lesson6/Registerform.jsx';
import Updatepass from './lesson6/Updatepass.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Deleteform from './lesson6/Deleteform.jsx';




const root = ReactDOM.createRoot(document.getElementById('root2'));
//const user=null;
//const user={username:"ahmed"};
root.render(
 
    
    <BrowserRouter>
    <NavC />
    <ToastContainer
        
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
/>

    
    <Routes>

      <Route index element={<Counter />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      
    
      
      <Route path="/*" element={<Notfoundpage />} />
      <Route path="/carousel" element={<Caro/>} />
      <Route path="/dashboard" element={
        <Protectedroute >
          <Dashboardlayout/>
        </Protectedroute>
        
        } >
        <Route index element={<Homedash/>} />
        <Route path='users' element={<Usersdash/>} />
        <Route path='posts' element={<Postsdash/>} />
        <Route path='products' element={<Productsdash />} />
       

      </Route>
      <Route path='/shop' element={<Shop/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path="/posts/:id" element={<Post />} /> 
      <Route path="/loginf" element={<Loginform />} /> 
      <Route path="/registerf" element={<Registerform />} /> 
      <Route path="/updatep" element={<Updatepass />} /> 
      <Route path="/deletef" element={<Deleteform />} /> 


       

  

     

    </Routes>
  </BrowserRouter>
   


 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
