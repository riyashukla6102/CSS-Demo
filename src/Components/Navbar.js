import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className="navbar">
            <h3>TRIPUPP HR</h3>
            <div className="menu-bar">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">payroll</NavLink>
              <NavLink to="/">benefits</NavLink>
              <NavLink to="/">work with us</NavLink>
            </div>
           <div className="signin">
           <button>
           <NavLink to="/">SIGN IN <div><i class="fa fa-chevron-right"></i></div></NavLink>
           
           </button>
           </div>
          </div>
        
        
    );
}

export default Navbar;