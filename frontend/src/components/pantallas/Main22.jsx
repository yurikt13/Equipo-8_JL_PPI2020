import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Main20() {
    return (
        <>
            <div className="yofond">
                <div className="Container yo text-center">
                    <svg width="6em" height="6em" viewBox="0 0 16 16" className="bi bi-person-circle text-white iconyo mt-3" fill="currentColor" xmlns="http://www.w6.org/2000/svg">
                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                    </svg>
                    <h1 className="text-title text-white titleyo">Taejunk</h1>
                    <br />
                </div>

                <div>
                    <nav className="navyo" >
                        <Link to="/post" className="text-decoration-none">
                            <p className="yopost text-white mt-2">Post</p>
                        </Link>
                        <Link to="/informacion" className="text-decoration-none">
                            <p className="yoinform text-white mt-2">Mi información</p>
                        </Link>
                    </nav>
                </div>

                <div className="bg-white">
                    <nav className="nav ubicacion">
                        <svg width="30px" height="30px" viewBox="0 0 16 16" className="bi bi-geo-alt-fill text-success iconubica" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg><span className="textubica">Medellín</span>
                    </nav>
                </div>

                <div className="cumpleaños bg-white mt-2">
                    <nav>
                        <svg width="30px" height="30px" viewBox="0 0 16 16" className="bi bi-gift-fill text-success iconcumple" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3z" />
                            <path d="M15 7v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
                        </svg><span className="textcumple">26/04/2004</span>
                    </nav>
                </div>

                <div className="escribealgo">
                    <label className="labelescribealgo" for="exampleFormControlTextarea1" height="45px"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Escribe algo de ti.."></textarea>

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </>
    );
}
export default Main20;