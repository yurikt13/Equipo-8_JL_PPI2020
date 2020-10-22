import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function Main23() {
    return (
        <>
                <div className="Container bg-success mas">
                    <div>
                        <Link to="yo" className="text-decoration-none">
                        <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-person-circle text-white yosvg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" /></svg>
                        </Link>
                    </div>
                    <div>
                        <Link to="yo" className="text-decoration-none">
                        <h3 className="text-title text-white yonom">Taejunk</h3>
                        </Link>
                    </div>
                    <hr />
                </div>

                <div className="Container bg-success">
                    <div>
                        <br />
                        <Link to="/configuraciones" className="text-decoration-none">
                            <p className="text-white textmas">Configuraciones</p>
                        </Link>
                    </div>
                    <hr className="hrr" />
                    <div>
                        <Link to="/miprogreso" className="text-decoration-none">
                            <p className="text-white textmas">Mi progreso</p>
                        </Link>
                    </div>
                    <hr />
                    <div>
                        <Link to="/quieresdivertirte" className="text-decoration-none">
                            <p className="text-white textmas">¿Quieres divertirte?</p>
                        </Link>
                    </div>
                    <hr />
                    <div>
                        <Link to="/miprogreso" className="text-decoration-none">
                            <p className="text-white textmas">Mi progreso</p>
                        </Link>
                    </div>
                    <hr />
                    <div>
                        <Link to="/acercade" className="text-decoration-none">
                            <p className="text-white textmas">Acerca de</p>
                        </Link>
                    </div>
                    <hr />
                    <div>
                        <Link to="/salir" className="text-decoration-none">
                            <p className="text-white textmas">Salir</p>
                        </Link>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>

        </>
    );
}
export default Main23;