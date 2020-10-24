import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
function Main17() {
    return (
        <>

            <div className="Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <Link to="/alarma" className="text-decoration-none">
                        <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
                    </Link>
                </nav>
            </div>

            <div className="fala mt-3">
                <input type="radio" className="option1" />solo fecha de inicio<br />
                <label for="date" className="copila1">Seleccionar Fecha</label>
                <input type="date" id="date" />
                <p></p>
                <input type="radio" className="option2" />Periodo exacto<br />
                <label for="date" className="copila2">Fecha de inicio</label>
                <input type="date" id="date" />
                <p></p>
                <label for="date" className="copila3">Fecha final</label>
                <input type="date" id="date" />
                <p></p>
                <input type="radio" className="option3" />Temporada<br />
                <label for="date" className="copila4">Fecha de inicio</label>
                <input type="date" id="date" />
                <p></p>
                <label for="date" className="copila5">Fecha final</label>
                <input type="date" id="date" />
            </div>

            <div>
                <Link to="/alarma3" className="text-decoration-none">
                    <button className=" btnes mt-3">Establecer</button>
                </Link>
            </div>
        </>

    )
};
export default Main17;