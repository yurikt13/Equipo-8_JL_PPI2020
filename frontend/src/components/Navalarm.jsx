import React from 'react';
import { Link } from 'react-router-dom';

const Navalarm = () => {

    return (
        <div className="Container">
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <a className="navbar-brand text-white" href="#">PACHAMAMA</a>
                <Link to="/recordatorios2" className="text-decoration-none">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-check2 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg></Link>
            </nav>
        </div>
    )
};

export default Navalarm;