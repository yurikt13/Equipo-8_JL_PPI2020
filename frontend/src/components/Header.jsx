import React from 'react';
import '../components/pantallas/App.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <a className="navbar-brand text-white" href="/inicio">PACHAMAMA</a>
                <button className="navbar-toggler colorvitos" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-list text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/inicio" className="text-decoration-none">
                                <a className="nav-link text-white" href="">Inicio<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/yo" className="text-decoration-none">
                                <a className="nav-link text-white" href="">Yo</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mas" className="text-decoration-none">
                                <a className="nav-link  text-white" href="" tabindex="-1" aria-disabled="true">Más</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Header;