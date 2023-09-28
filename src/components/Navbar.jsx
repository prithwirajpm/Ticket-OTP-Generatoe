import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'white' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <h1 style={{fontFamily:'Lobster, cursive'}}>FilmFusionHub</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link fw-bold" aria-current="page">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
