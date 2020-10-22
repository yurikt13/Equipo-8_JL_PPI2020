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
            <p className="card-text">La caléndula es una planta herbácea, aromática, glandular, de anual a perenne, leñosa únicamente en la base.</p>
            <Link to="/calendula" className="text-decoration-none">
            <a href="#" className="btn btn-success">Ver mas..</a>
            </Link>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con4} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Pensamiento</h5>
            <p className="card-text">Los pensamientos son conocidos como plantas híbridas que en su mayoría son cultivadas por ser flores llamativas.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con5} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Rosa del desierto</h5>
            <p className="card-text">La Rosa del desierto es un arbusto conocido científicamente como Adenium obesum que pertenece a la familia Apocynaceae.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dahlia</h5>
            <p className="card-text">La Dahlia es una maravillosa flor que se encuentra rodeada de múltiples pétalos con diferentes colores. Presenta tallos flexibles y raíces fuertes. </p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
        <img src={con1} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Freesia</h5>
            <p className="card-text">Freesia es un género de plantas bulbosas de la familia Iridaceae. Comprende aproximadamente 15 especies nativas de África, todas ellas con cormos de 1 a 2,5 cm de diámetro.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

      </div>
    </>

  )


};

export default Main9;