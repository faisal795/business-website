import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Stories
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        // activeclassname="menu_active"
                        
                        className="nav-link"
                        aria-current="page"
                        exact="true" 
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/about"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        // activeclassname="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                   
                    <li className="nav-item">
                      <NavLink
                        // activeclassname="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/contact"
                      >
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* <NavLink className={({isActive}) => 'list-group-item' + (isActive ?' demo' : '')} to="/about">About</NavLink> 
<NavLink className={({isActive}) => 'list-group-item' + (isActive ?' demo' : '')} to="/home">Home</NavLink> */}
    </>
  );
};

export default Navbar;
