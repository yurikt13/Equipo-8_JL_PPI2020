import React from 'react';
import { Link } from 'react-router-dom';
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
            <p className="card-text">La Cycas revoluta, o más conocida como Cica o Palma de Sagú, lleva en la Tierra unos tres-cientos millones de años.</p>
            <Link to="/cycasrevolutas">
            <a href="#" className="btn btn-success">Ver mas..</a>
            </Link>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dicksonia Antarctica</h5>
            <p className="card-text">La Dicksonia antarctica es un helecho arborescente (es decir, de aspecto similar a los árboles), originario de distintas zonas de Australia.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin1} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Calathea Medallion</h5>
            <p className="card-text">Esta planta también conocida como “Calathea Roseopicta Medallion” hace parte de la familia Marantaceae  y se caracteriza por tener hojas grandes y ovaladas de color verde oscuro con patrones verdes claros y plateados.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin4} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Kentia Forsteriana</h5>
            <p className="card-text">Es una de las palmeras más decorativas debido al porte que le otorgan sus largas y finas hojas arqueadas. Normalmente, la kentia suele tener cuatro o cinco hojas grandes.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={sin5} className="card-img-top" alt="Flor" height="300"/>
          <div className="card-body">
            <h5 className="card-title">Ctenanthe Setosa</h5>
            <p className="card-text">Ctenanthe setosa o papel de música es una planta herbácea originaria de Brasil que es cultivada como planta ornamental en muchos países tropicales.</p>
            <a href="#" className="btn btn-success">Ver mas..</a>
          </div>
        </div>
      </div>


    </>
  )
};


export default Main3;