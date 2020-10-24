import React from 'react';
import { Link } from 'react-router-dom';
import Miprogress from './images/miprogress.jpg'
import './App.css';

function Main26() {
    return (
        <>
            <div className="Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <Link to="/miprogreso" className="text-decoration-none">
                        <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
                    </Link>
                </nav>
            </div>



            <div className="card-deck">
                <div className="card">
                    <h5 className="card-title text-center mt-3 titleprogress">Calathea Medallion</h5>
                    <img src={Miprogress} className="card-img-top" alt="Progreso" />
                </div>
            </div>

        </>
    )
};
export default Main26;