import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
function Main17() {
    return (
        <>
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