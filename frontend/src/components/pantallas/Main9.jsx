import React from 'react';
import "./App.css";
import dahlia from '../components/img1/dahlia.jpg';
import calendula from '../components/img1/calendula.jpg';
import calendulaflores from '../components/img1/calendulaflores.jpg';
import pensamientoflor from '../components/img1/pensamientoflor.jpg';
import rosadeldesierto from '../components/img1/rosadeldesierto.jpg';
import freesia from '../components/img1/freesia.jpg';
const Footer = () => {

    return (
        
      <div className="Container">

        <div className="card hola" >
        <img src={dahlia} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

<div className="card casa" >
<img src={calendula} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card carro" >
        <img src={calendulaflores} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card mapa" >
        <img src={pensamientoflor} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card topa" >
        <img src={rosadeldesierto} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card nino" >
        <img src={freesia} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
      
    )


};

export default Footer;