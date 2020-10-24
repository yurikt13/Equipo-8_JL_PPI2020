import React from 'react';
import { Link } from 'react-router-dom';
import '../pantallas/App.css';
import con2 from '../pantallas/images/con2.jpg';


const Main10 = () => {

  return (

    <>
    <div className="Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <Link to="/plantasconflor" className="text-decoration-none">
                        <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
                    </Link>        
                </nav>
            </div>

    <div className="card-deck">
        <div className="card">
        <h5 className="card-title text-center mt-3">Caléndula</h5>
        <img src={con2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <p className="card-text">La caléndula es una planta herbácea, aromática, glandular, de anual a perenne, leñosa únicamente en la base. El tallo de 20 a 55 cm de altura, es erguido o procumbente, ramificada y generalmente con hojas casi hasta el extremo superior. Las hojas de 7-14 x 1-4 cm, son alternas, simples, oblongas-lanceoladas, estrechamente obovadas, oblongas o espatuladas. </p>
            <p className="card-text">Las flores son liguladas y amarillas, con una floración que dura prácticamente todo el año, cerrándose de noche y abriéndose a al amanecer.</p>
            <p className="card-text">La flor de caléndula tiene una acción antinflamatoria y fuertemente cicatrizante cuando se aplica de forma tópica. Con extractos de la flor de caléndula, muestra una acción estimulante de la epitelización de las heridas y una actividad antiinflamatoria en edemas donde interviene la prostaglandina (los triterpenos, sobre todo el faradiol, han demostrado ser los principios antiinflamatorios más importantes).</p>
          
          </div>
        </div>
    </div>
    </>

  )


};

export default Main10;