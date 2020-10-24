import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Main29() {
  return (
    <>
    <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/mas" className="text-decoration-none">
            <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
          </Link>
        </nav>
      </div>


    <div className="cardayuda">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title text-secondary">Ayuda</h6>
          <p className="text-muted">Encuentra aqui las respuestas a tus preguntas</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h6 className="card-title text-secondary">Enviar Comentarios</h6>
          <p className="text-muted">Ayudanos a mejorar pachamama</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h6 className="card-title text-secondary">Condiciones del servicio de Pachamama</h6>
          <p className="text-muted">Lee las condiciones del servicio de pachamama</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h6 className="card-title text-secondary">Version de la aplicación</h6>
          <p className="text-muted">1.0.3</p>
        </div>
      </div>
    </div>
    </>

  )
};

export default Main29;