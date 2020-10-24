import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Main25() {
  return (
    <>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/mas" className="text-decoration-none">
            <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
          </Link>
        </nav>
      </div>


      <div className="cardconfi">
        <div className="card">
          <div className="card-body">
            <Link to="/progresocalathea" className="text-decoration-none">
              <h5 className="text-dark">Calathea Medallion</h5>
            </Link>
            <p className="text-muted">Regar hoy 3:00PM</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5>Caléndula</h5>
            <p className="text-muted">Fertilizar hoy 7:00AM</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5>Pensamiento</h5>
            <p className="text-muted">Podar hoy 3:00PM</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5>Cycas Revolutas</h5>
            <p className="text-muted">Podar hoy 5:00PM</p>
          </div>
        </div>
      </div>
    </>

  )
};

export default Main25;