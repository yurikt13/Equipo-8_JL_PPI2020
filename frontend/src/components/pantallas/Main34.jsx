import React from 'react';
import { Link } from 'react-router-dom';
import '../pantallas/App.css';
import sin2 from '../pantallas/images/sin2.jpg';


const Main10 = () => {

  return (

    <>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/plantsinflor" className="text-decoration-none">
            <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
          </Link>
        </nav>
      </div>

      <div className="card-deck">
        <div className="card">
          <h5 className="card-title text-center mt-3">Cycas Revolutas</h5>
          <img src={sin2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <p className="card-text">La Cycas revoluta, o más conocida como Cica o Palma de Sagú, lleva en la Tierra unos tres-cientos millones de años. Ya estaban antes de la aparición de los dinosaurios, motivo por el que se considera un fósil viviente, y uno de los más resistentes por cierto.</p>
            <p className="card-text">Alcanza una altura máxima de 7 metros, si bien los humanos no solemos poder ver ejemplares de más de 2 metros debido a su lento desarrollo y a nuestra limitada longevidad. Está formada por un falso tronco, llamado también pseudotallo, más o menos recto, que mide unos 20 centímetros de grosor, y por una corona de hojas rígidas, de color verde oscuro, con una longitud de hasta 2 metros.</p>
            <p className="card-text">Es importante que se ubique en un lugar con sol directo, ya que si no tiene suficiente luz, sus hojas no crecerán adecuadamente, perdiendo firmeza. Pero ojo, que si hasta ahora había estado protegida del astro rey, has de ir acostumbrándola poco a poco porque de lo contrario sus hojas se quemarán.</p>

          </div>
        </div>
      </div>
    </>

  )


};

export default Main10;