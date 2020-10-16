import React from 'react';
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
          <div className="card-body">
            <h5 className="card-title">Pensamiento</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card">
        <img src={con2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Caléndula</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card">
          <img src={sin2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Cycas Revolutas</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dahlia</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>


        <div className="card">
          <img src={sin3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dicksonia Antarctica</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>
      </div>
    </>

  )
};

export default Main11;