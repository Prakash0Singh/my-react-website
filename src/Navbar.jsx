import React from 'react';
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
  <NavLink  className="navbar-brand fs-3" to="/">
      Prakash Singh
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact="true" className="nav-link fs-3" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-3" to="/about">About</NavLink>
        </li><li className="nav-item">
          <NavLink className="nav-link fs-3" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-3" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  );
}
export default Navbar;