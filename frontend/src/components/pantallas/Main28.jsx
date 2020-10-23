import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import man1 from '../pantallas/images/man1.jpg';
import navmandala1 from '../pantallas/images/navmandala1.jpg';

function Main28() {
    return (
        <>
            <div>
                <div>
                    <br />
                    <br/>
                    <br />
                    <Link to="/mandala1">
                        <img src={man1} className="card-img-top" alt="Mandala1" />
                    </Link>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <img src={navmandala1} className="card-img-top navMan mt-3" alt="NavMandala1" />
                </div>
            </div>


        </>
    )
};
export default Main28;