import React from 'react';
import { Link } from 'react-router-dom';
import '../components/pantallas/App.css';

const Footer = () => {

    return (
        <>
            <div className="btn-expand-lg navbar-light bg-success mb-5 vw-100">
                    <Link to="/inicio" className="text-decoration-none">
                        <h4 className="text-title text-white text-center">P   A   C   H   A   M   A   M   A</h4>
                    </Link>
            </div>
        </>
    )

};

export default Footer;