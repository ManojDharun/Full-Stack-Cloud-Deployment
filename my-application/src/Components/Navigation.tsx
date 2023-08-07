import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Profile from './Profile';
import { useState } from 'react';

interface NavigationProps {
  isRegisterVisible : boolean;
  onRegisterClick : () => void;
}
function Navigation({isRegisterVisible,onRegisterClick}:NavigationProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <i className="fas fa-shopping-cart"></i>
        </a> 

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className = "nav-item mb-lg-0">
              <a className = "nav-link text-white" href = "#">
                Contact
              </a>
            </li>
            <li className = "nav-item mb-lg-0">
              <a className = "nav-link text-white" href = "#">
                Careers
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mb-lg-0 ml-auto">
            <li className="nav-item">
              <button onClick = {onRegisterClick} className = "btn bg-white text-primary">
                {isRegisterVisible ? 'Login' : 'Register'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
