import React from 'react';
import './App.css';
import sin1 from '../pantallas/images/sin1.jpg';
import sin2 from '../pantallas/images/sin2.jpg';
import sin3 from '../pantallas/images/sin3.jpg';
import sin4 from '../pantallas/images/sin4.jpg';


function Main3 () {
    return (     
<>
            <h2>PLANTAS SIN FLORES</h2>
        <div className="card manzana" >
  <img src={sin1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card cara" >
  <img src={sin2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card cabeza" >
  <img src={sin3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card ojos" >
  <img src={sin4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card salsa" >
  <img src={sin1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>

    )
};

export default Main3;