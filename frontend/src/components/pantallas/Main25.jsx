import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Main25() {
  return (
    <>
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