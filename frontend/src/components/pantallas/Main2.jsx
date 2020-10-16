import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import facebook from '../pantallas/images/iniface.jpg';

function Main2() {
    return (
        <>
            <div className="Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <a className="navbar-brand text-white" href="#">Ingresar con Facebook</a>
                </nav>
                <br/>
                <br/>
                <br/>
                <div className="Containerr text-center mt-5">
                <img className="face" src={facebook} width="100"/>
                <br/>
                    <div class="card-body">
                        <h5 class="card-title">Continuar como</h5>
                        <h5 class="card-title">Taejunk</h5>
                        <p class="card-text"></p>
                        <br/>
                        <br/>
                        <Link to="/inicio" className="text-decoration-none">
                        <a href="#" class="btn btn-primary">Continuar</a>
                        </Link>
                    </div>
                </div>
                </div>

        </>
    );
}
export default Main2;