import React from 'react';
import { Link } from 'react-router-dom';
import principal from '../pantallas/images/principal.jpg';

import './App.css';

const Main0 = () => {


    return (
        <>
            <div className='Container principal'>
                <Link to="/login" className="text-decoration-none">
                <img src={principal} className="card-img-top" alt="Prin" />
                </Link>
            </div>
        </>

    )
};

export default Main0;