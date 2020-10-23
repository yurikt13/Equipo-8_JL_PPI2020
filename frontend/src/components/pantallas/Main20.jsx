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

                <div className="textpostcoment">
                <small className="text-muted">Comentaste ese post</small>
                </div>

                <div className="card mt-3 cardpost">
                    <div className="card-body">
                        <h6 className="card-title">Alfred</h6>
                        <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                        <small className="text-muted">Hace 2h</small>
                    </div>
                    <div className="card-footer cardpost mt-3">
                            <svg width="5em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></svg>
                            
                            <svg width="5em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" />
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" ></path>
                                </svg>
                            
                            <svg width="5em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z" />
                                </svg>
                    </div>
                </div>
                
                <br/>
                <br/>
                <br/>
                <br/>
                        
            </div>
        </>
    );
}
export default Main20;