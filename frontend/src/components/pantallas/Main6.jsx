import React from 'react';
import { Link } from 'react-router-dom';
import '../pantallas/App.css';

const Main6 = () => {

    return ( 
       <>
       <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item hee">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <Link to="/alfred" className="text-decoration-none">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" /></svg>
                                    <span className="text-dark">Alfred</span>
                                    </Link>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium dolorem..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li className="list-group-item">
                    <div class="row no-gutters">
                            <div class="col-md-4">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" /></svg>
                                    <span>Kira</span>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium dolorem..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                    <div class="row no-gutters">
                            <div class="col-md-4">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" /></svg>
                                    <span>Hyung</span>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium dolorem..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                    <div class="row no-gutters">
                            <div class="col-md-4">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" /></svg>
                                    <span>Leo</span>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium dolorem..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>

       </>
    )

};

export default Main6;