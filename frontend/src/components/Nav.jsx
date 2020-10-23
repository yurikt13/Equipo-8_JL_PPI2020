import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="Container">
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <Link to="/inicio" className="text-decoration-none label1">
                <a className="navbar-brand text-white" href="#">PACHAMAMA</a>
                </Link>
            </nav>
        </div>
    )
};

export default Nav;