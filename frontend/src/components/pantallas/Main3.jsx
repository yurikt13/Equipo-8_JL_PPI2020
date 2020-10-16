import React from 'react';
import './App.css';
import sin1 from '../pantallas/images/sin1.jpg';
import sin2 from '../pantallas/images/sin2.jpg';
import sin3 from '../pantallas/images/sin3.jpg';
import sin4 from '../pantallas/images/sin4.jpg';
import sin5 from '../pantallas/images/sin5.jpg';

const Main3 = () => {

  return (
    <>

      <div className="Container navcon">
        <nav className="navbar navbar-expand-lg navbar-light bg-success text-white text-center">
          <a className="navbar-brand text-center text-white ticon" href="#">Sin flor</a>
        </nav>
      </div>

      <div className="card-deck">
        <div className="card">
          <img src={sin2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Cycas Revolutas</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dicksonia Antarctica</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin1} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Calathea Medallion</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin4} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Kentia Forsteriana</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin5} className="card-img-top" alt="Flor" height="300"/>
          <div className="card-body">
            <h5 className="card-title">Ctenanthe Setosa</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>
      </div>


    </>
  )
};


export default Main3;