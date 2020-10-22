import React from 'react';
import '../pantallas/App.css';
import planta from '../pantallas/images/planta.jpg';
import planta2 from '../pantallas/images/planta2.jpg';
import planta3 from '../pantallas/images/planta3.jpg';
import planta4 from '../pantallas/images/planta4.jpg';

const Main5 = () => {

    return (
        <>
            <div className="card-deck">
                
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Alfred</h5>
                        <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                        <img src={planta4} className="card-img-top" alt="" />
                        <small className="text-muted">Hace 2h</small>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group mr-auto mt-lg-5 w-10">
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></svg>
                            </button>
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" />
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" ></path>
                                </svg>
                            </button>
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Kira</h5>
                        <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                        <img src={planta2} className="card-img-top" alt="" />
                        <small className="text-muted">Hace 2h</small>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group mr-auto mt-0 mt-lg-5 w-10">
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></svg>
                            </button>
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" />
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" ></path>
                                </svg>
                            </button>
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>



                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Hyung</h5>
                        <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                        <img src={planta3} className="card-img-top" alt="" />
                        <small className="text-muted">Hace 2h</small>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group mr-auto mt-0 mt-lg-5 w-10">
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></svg>
                            </button>
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" />
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" ></path>
                                </svg>
                            </button>
                            <button type="button" className="btn btn-success"><svg width="5em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z" />
                                </svg>
                            </button>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Main5;