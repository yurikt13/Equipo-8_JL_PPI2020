import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main18 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            tato: 0,
            tuyo: 0
        }
    }

    handlelalala = () => {
        this.setState({
            number: 1,

        })
    }
    handlefff = () => {
        this.setState({
            tato: 1
        })
    }
    handlennn = () => {
        this.setState({
            tuyo: 1
        })
    }

    handlepupapu = () => {
        this.setState({
            number: 2,

        })
    }
    handleppp = () => {
        this.setState({
            tuyo: 2
        })
    }
    handlegancho = () => {
        this.setState({
            tato: 2
        })
    }
    handlecada = () => {
        this.setState({
            tuyo: 3
        })
    }
    handlepato = () => {
        this.setState({
            tato: 3
        })
    }

    handleouou = () => {
        this.setState({
            number: 3,

        })
    }

    handlecasa = () => {
        this.setState({
            tato: 4,


        })
    }
    handlecupa = () => {
        this.setState({
            tato: 5
        })
    }
    handlecopa = () => {
        this.setState({
            tato: 6,

        })
    }
    handlecoro = () => {
        this.setState({
            tato: 7,

        })
    }

    render() {
        return (
            <>
                <div className="Container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-success">
                        <Link to="/alarma3" className="text-decoration-none">
                            <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
                        </Link>
                    </nav>
                </div>

                <div className="fala mt-3">
                    <input type="radio" className="optionn1 mt-3" />Diariamente cada {this.state.number} dias(s)<br />
                    <button onClick={this.handlelalala} className="cuaderno">1 DIA</button>{'     '}
                    <button onClick={this.handlepupapu} className="cuaderno">2 DIA</button>{'     '}
                    <button onClick={this.handleouou} className="cuaderno">3 DIA</button>{'     '}
                    <br />
                    <br />

                    <input type="radio" className="optionn2 mt-3" />Semanalmente cada {this.state.tato} semana(s)<br />
                    <button onClick={this.handlefff} className="cuaderno">D</button>{'     '}
                    <button onClick={this.handlegancho} className="cuaderno">L</button>{'     '}
                    <button onClick={this.handlepato} className="cuaderno">M</button>{'     '}
                    <button onClick={this.handlecasa} className="cuaderno">M</button>{'     '}
                    <button onClick={this.handlecupa} className="cuaderno">J</button>{'     '}
                    <button onClick={this.handlecopa} className="cuaderno">V</button>{'     '}
                    <button onClick={this.handlecoro} className="cuaderno">S</button>{'     '}
                    <br />
                    <br />

                    <input type="radio" className="optionn3 mt-3" />Mensualmente cada {this.state.tuyo} mes(es)<br />
                    <button onClick={this.handlennn} className="cuaderno">1 MES</button>{'     '}
                    <button onClick={this.handleppp} className="cuaderno">2 MES</button>{'     '}
                    <button onClick={this.handlecada} className="cuaderno">3 MES</button>{'     '}
                    <br />
                    <br />
                </div>

                <div>
                    <Link to="/alarma4" className="text-decoration-none">
                        <button className=" btnes mt-3">Establecer</button>
                    </Link>
                </div>

            </>
        );
    }
}
export default Main18;