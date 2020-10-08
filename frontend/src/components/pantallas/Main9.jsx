import React from 'react';
import './App.css';
import con1 from '../pantallas/images/con1.jpg';
import con2 from '../pantallas/images/con2.jpg';
import con3 from '../pantallas/images/con3.jpg';
import con4 from '../pantallas/images/con4.jpg';
import con5 from '../pantallas/images/con5.jpg';
const Main9 = () => {

    return (
        
      <div className="Container">
         <h1>PLANTAS CON FLOR</h1>
        <div className="card hola" >
        <img src={con1} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

<div className="card casa" >
<img src={con2} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card carro" >
        <img src={con3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card mapa" >
        <img src={con4} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card topa" >
        <img src={con5} className="card-img-top" alt="Flor"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
      
    )


};

export default Main9;