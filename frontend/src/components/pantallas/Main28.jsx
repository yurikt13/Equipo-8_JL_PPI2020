import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import man1 from '../pantallas/images/man1.jpg';
import navmandala1 from '../pantallas/images/navmandala1.jpg';

function Main28() {
    return (
        <>
            <div className="Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <Link to="/quieresdivertirte" className="text-decoration-none">
                        <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
                    </Link>
                </nav>
            </div>



            <div>
                <div>
                    <br />
                    <br />
                    <br />
                    <Link to="/mandala1">
                        <img src={man1} className="card-img-top" alt="Mandala1" />
                    </Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <img src={navmandala1} className="card-img-top navMan mt-3" alt="NavMandala1" />
                </div>
            </div>


        </>
    )
};
export default Main28;