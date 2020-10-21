import React from 'react';
import '../components/pantallas/App.css';
import { Link } from 'react-router-dom';

const Inicio = () => {

    return (
        <>
            <div className="Container">
                    <div className="btn-expand-lg navbar-light bg-success inline-block">
                            <div className="btn-group mr-auto mt-0 mt-lg-5 foro">
                                <button type="button" className="btn btn-success">Foro</button>
                                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <Link to="/inicio" className="text-decoration-none">
                                        <a className="dropdown-item" href="#">Novedades</a>
                                    </Link>
                                    <Link to="/chat" className="text-decoration-none">
                                        <a className="dropdown-item" href="#">Mis chats</a>
                                    </Link>
                                </div>
                            </div>


                            <div className="btn-group mr-auto mt-0 mt-lg-5 plantas">
                                <button type="button" className="btn btn-success">Plantas</button>
                                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <Link to="/plantasconflor" className="text-decoration-none">
                                        <a className="dropdown-item" href="#">Con flor</a>
                                    </Link>
                                    <Link to="/plantasinflor" className="text-decoration-none">
                                        <a className="dropdown-item" href="#">Sin flor</a>
                                    </Link>
                                </div>
                            </div>


                            <div className="btn-group mr-auto mt-0 mt-lg-5 recorda">
                                <button type="button" className="btn btn-success">Recordatorios</button>
                                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <Link to="/recordatorios" className="text-decoration-none">
                                        <a className="dropdown-item" href="#">Mis plantas</a>
                                    </Link>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
};

export default Inicio;