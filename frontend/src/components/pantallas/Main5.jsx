import React, { Component } from 'react';
import '../pantallas/App.css';
import planta2 from '../pantallas/images/planta2.jpg';
import planta3 from '../pantallas/images/planta3.jpg';
import planta4 from '../pantallas/images/planta4.jpg';

class Main5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon1: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
        };

    }

    componentWillMount() {
        console.log('Se ejecutó el método componentWillMount()');
    };

    componentDidMount() {
        console.log('Se ejecutó el método componentDidMount()');
    }

    cambiarMensaje = () => this.setState({
        icon: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>
    })



    //Icono de la segunda card
    componentWillMount() {
        console.log('Se ejecutó el método componentWillMount()');
    };

    componentDidMount() {
        console.log('Se ejecutó el método componentDidMount()');
    }

    cambiarMensaje = () => this.setState({
        icon1: <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg>
    })

    render() {

        return (
            <>
                <div className="card-deck">

                    <div className="card border-secondary mt-3 card1">
                        <div className="card-body">
                            <h5 className="card-title">Alfred</h5>
                            <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                            <img src={planta4} className="card-img-top" alt="" />
                            <small className="text-muted">Hace 2h</small>
                        </div>
                        <div className="card-footer border-secondary">
                            <div className="btn-group mr-auto mt-lg-5 w-10">
                                {this.state.icon1}
                                <icon1 onClick={this.cambiarMensaje.bind(this)}></icon1>

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
                    </div>

                    <div className="card mt-3 border-secondary card2">
                        <div className="card-body">
                            <h5 className="card-title">Kira</h5>
                            <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                            <img src={planta2} className="card-img-top" alt="" />
                            <small className="text-muted">Hace 5h</small>
                        </div>
                        <div className="card-footer border-secondary">
                            <div className="btn-group mr-auto mt-0 mt-lg-5 w-10">
                                {this.state.icon}
                                <icon onClick={this.cambiarMensaje.bind(this)}></icon>


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
                    </div>



                    <div className="card border-secondary mt-3 card3">
                        <div className="card-body">
                            <h5 className="card-title">Hyung</h5>
                            <p className="card-text">He tenido un buen progreso con mi planta!!</p>
                            <img src={planta3} className="card-img-top" alt="" />
                            <small className="text-muted">Hace 10h</small>
                        </div>
                        <div className="card-footer border-secondary">
                            <div className="btn-group mr-auto mt-0 mt-lg-5 w-10">
                                {this.state.icon}
                                <icon onClick={this.cambiarMensaje.bind(this)}></icon>

                                <svg width="5em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" />
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" ></path>
                                </svg>

                                <svg width="5em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z" />
                                </svg>

                                <br />
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="comentarr mt-3 border-secondary">
                        <div className="labeldialgo" >
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Di algo.."></textarea>
                        </div>
                    </div>
                </div>
            </>
        );

    }

}

export default Main5;