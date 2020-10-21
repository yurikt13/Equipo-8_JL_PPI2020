import React from 'react';
import { Link } from 'react-router-dom';
import '../pantallas/App.css';
import con1 from '../pantallas/images/con1.jpg';
import con2 from '../pantallas/images/con2.jpg';
import con3 from '../pantallas/images/con3.jpg';
import con4 from '../pantallas/images/con4.jpg';
import con5 from '../pantallas/images/con5.jpg';

const Main9 = () => {

  return (

    <>
      <div className="Container navcon">
          <nav className="navbar navbar-expand-lg navbar-light bg-success text-white text-center">
            <a className="navbar-brand text-center text-white ticon" href="#">Con flor</a>
          </nav>
      </div>

      <div className="card-deck">
        <div className="card">
        <img src={con2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Caléndula</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/calendula" className="text-decoration-none">
            <a href="#" className="btn btn-success">Ver mas..</a>
            </Link>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con4} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Pensamiento</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con5} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Rosa del desierto</h5>
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

        <div className="card mt-3">
        <img src={con1} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Freesia</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

      </div>
    </>

  )


};

export default Main9;