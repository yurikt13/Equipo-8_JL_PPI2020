import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

class Main16 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAlarma: []
    }
  }

  peticionGet = () => {
    axios.get('https://backpachamama.herokuapp.com/api/alarma')
      .then(res => {
        this.setState({
          dataAlarma: res.data
        })
      }).catch(err => {
        console.log(err.message)
      })
  }

  componentDidMount() {
    this.peticionGet()
  }

  handleccc = () => {
    this.setState({
      sacari: <svg width="50px" height="50px" viewBox="0 0 16 16" className="bi bi-alarm-fill mt-3 iconalarm text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
      </svg>

    })
  }

  render() {
    console.log(this.state.dataAlarma);

    //hacemos un destructuring
    const daticos = this.state.dataAlarma
    return (
      <>
        <div className="Container">
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/recordatorios" className="text-decoration-none">
              <svg width="18px" height="18px" viewBox="0 0 16 16" className="bi bi-chevron-left text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
              <a className="navbar-brand text-white navpa" href="#">PACHAMAMA</a>
            </Link>
            <Link to="/recordatorios2" className="text-decoration-none">
              <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-check2 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg></Link>
          </nav>
        </div>

        {daticos.map((alarmas) => {
          return (
            <div>
              <svg width="50px" height="50px" viewBox="0 0 16 16" className="bi bi-alarm mt-3 iconalarm text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
              </svg>
              {this.state.carpa}
              <Link to="/fecha" className="text-decoration-none label1">
                <button>{alarmas.fecha}</button>
              </Link>

              <select className="label2">
                <option>{alarmas.hora}</option>
                <option>1:00 AM</option>
                <option>2:00 AM</option>
                <option>3:00 AM</option>
                <option>4:00 AM</option>
                <option>5:00 AM</option>
                <option>6:00 AM</option>
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 AM</option>

                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
                <option>12:00 PM</option>
              </select>{'            '}


              <Link to="/cadacuanto" className="text-decoration-none label3">
                <button>Cada día {alarmas.cada_cuando}</button>
              </Link>

              <select className="label4 mt-3">
                <option>{alarmas.cuidado}</option>
                <option> Cuidado </option>
                <option>Desbrozar</option>
                <option>Deshojar</option>
                <option>Fertilizar</option>
                <option>Fumigar</option>
                <option>Pesticida</option>
                <option>Plantar</option>
                <option>Podar</option>
                <option>Pulverizar</option>
                <option>Regar</option>
                <option>Sembrar</option>
                <option>Transplantar</option>
              </select>


              <div className="botones3">
                <div className="custom-control custom-switch activ5 " >
                  <input type="checkbox" className="custom-control-input margemv" id="customSwitch1" onClick={this.handlekkk} />
                  <label className="custom-control-label margemv" for="customSwitch1">Activar</label>
                </div>
                <div>
                  <Link to="/alarma2" className="text-decoration-none bootncitovo">
                    <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-patch-plus-fll text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                    </svg></Link>
                </div>

                <div>
                  <Link to="/sinalarma" className="text-decoration-none bootncitovoelim">
                    <svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-patch-minus-fll text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                    </svg></Link>
                </div>
              </div>
            </div>

          )
        })}



      </>

    );
  }

}
export default Main16;
