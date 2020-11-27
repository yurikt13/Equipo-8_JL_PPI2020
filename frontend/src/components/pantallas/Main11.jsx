import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import con4 from '../pantallas/images/con3.jpg';
import con2 from '../pantallas/images/con2.jpg';
import sin2 from '../pantallas/images/sin2.jpg';
import con3 from '../pantallas/images/con3.jpg';
import sin3 from '../pantallas/images/sin3.jpg';


class Main11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPlanta: []
    }
  }

  peticionGet = () => {
    axios.get('https://backpachamama.herokuapp.com/api/planta')
      .then(res => {
        this.setState({
          dataPlanta: res.data
        })
      }).catch(err => {
        console.log(err.message)
      })
  }


  componentDidMount() {
    this.peticionGet()
  }


  render() {
    console.log(this.state.dataPlanta);
    const datitosPlant = this.state.dataPlanta



    return (
      <>

        <div className="Container navcon">
          <nav className="navbar navbar-expand-lg navbar-light bg-success text-white text-center">
            <a className="navbar-brand text-center text-white timis" href="#">Mis plantas</a>
            <Link to='/addPlant' className="text-decoration-none">
            <svg width="2rem" height="2rem" viewBox="0 0 16 16" className="bi bi-patch-plus text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
              <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
              <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8z" /></svg>
            </Link>
          </nav>
        </div>

        {datitosPlant.map((infoPlant) => {
          return (
            <div className="card-deck">
              <div className="card">
                <img src={con2} className="card-img-top" alt="Flor" />
                <div className="card-body">
                  <h5 className="card-title">{infoPlant.nomplanta}</h5>
                  <div><small className="text-muted mt-3">Estado: {infoPlant.estado}</small></div>
                  <div><small className="text-muted mt-3">Cuidado: {infoPlant.cuidado}</small></div>
                  <p className="card-text"></p>
                  <Link to="/alarma" className="text-decoration-none">
                    <a href="#" className="btn btn-success">Alarma</a>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}

        <div className="card">
          <img src={con4} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Caléndula</h5>
            <small className="text-muted">Agregada hace 8 día(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>

        <div className="card">
          <img src={sin2} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Cycas Revolutas</h5>
            <small className="text-muted">Agregada hace 2 semana(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>

        <div className="card mt-3">
          <img src={con3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dahlia</h5>
            <small className="text-muted">Agregada hace 2 semana(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>


        <div className="card">
          <img src={sin3} className="card-img-top" alt="Flor" />
          <div className="card-body">
            <h5 className="card-title">Dicksonia Antarctica</h5>
            <small className="text-muted">Agregada hace 3 semana(s)</small>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success">Alarma</a>
          </div>
        </div>
      </>
    );
  }
}


export default Main11;