import React from 'react';
import './App.css';
import usuario2 from '../pantallas/images/usuario2.png';

function Main20() {
    return (
        <>
         <div className="tu">
        <img className="yo" src={usuario2}/>
            <h1>Taejunk</h1>
            <button className="noche">Post</button>{'                                                                                                   '}<button className="noche">Mi información</button>
            </div>

            <div className="card">
    <div className="card-body">
    <img className="el" src={usuario2}/><h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>
</div>


        </>
    );
}
export default Main20;