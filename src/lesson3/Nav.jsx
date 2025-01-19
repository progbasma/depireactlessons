import React from 'react';
import { NavLink } from 'react-router';
const Nav = () => {
    return ( 
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) =>    isActive ? " nav-link text-danger " : " nav-link text-black"  } aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) =>    isActive ? " nav-link text-danger " : " nav-link text-black"  }
                       
                        to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) =>    isActive ? " nav-link text-danger " : " nav-link text-black"  } to="/contact">Contact</NavLink>
                    </li>
                   
                    <li className="nav-item">
                        <NavLink className={({ isActive }) =>    isActive ? " nav-link text-danger " : " nav-link text-black"  } to="/posts">Posts</NavLink>
                    </li>
                   
                   
                    </ul>
                  
                </div>
                </div>
            </nav>
        
        </>
     );
}
 
export default Nav;