import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import con4 from '../pantallas/images/con3.jpg';
import con2 from '../pantallas/images/con2.jpg';
import sin2 from '../pantallas/images/sin2.jpg';
import con3 from '../pantallas/images/con3.jpg';
import sin3 from '../pantallas/images/sin3.jpg';


function Main11() {
  return (
    <>

<div className="Container navcon">
        <nav className="navbar navbar-expand-lg navbar-light bg-success text-white text-center">
          <a className="navbar-brand text-center text-white timis" href="#">Mis plantas</a>
        </nav>
      </div>

      <div className="card-deck">
      <div className="card">
        <img src={con4} className="card-img-top" alt="Flor" />
        <small className="text-muted hace">Agregada hace 1 día(s)</small>
          <div className="card-body">
            <h5 className="card-title">Pensamiento</h5>
            <p className="card-text">Fertilizar hoy 7:00AM</p>
            <p className="card-text">Cada 2 día(s)</p>
            <Link to="/alarma" className="text-decoration-none">
            <a href="#" className="btn btn-success">Alarma</a>
            </Link>
          </div>
        </div>

        <div className="card">
        <img src={con2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Caléndula</h5>
            <small className="text-muted">Agregada hace 8 día(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>

        <div className="card">
          <img src={sin2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Cycas Revolutas</h5>
            <small className="text-muted">Agregada hace 2 semana(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dahlia</h5>
            <small className="text-muted">Agregada hace 2 semana(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>


        <div className="card">
          <img src={sin3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dicksonia Antarctica</h5>
            <small className="text-muted">Agregada hace 3 semana(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>
      </div>
    </>

  )
};

export default Main11;