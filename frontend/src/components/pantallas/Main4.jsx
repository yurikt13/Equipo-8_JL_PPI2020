import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './App.css';

class Main4 extends Component {
  constructor(props) {
    //se llaman las props y se inicializan el estado
    super(props);
    this.state = {
      dataUsuario: []
    }
  }

peticionGet= () => {
  axios.get('https://backpachamama.herokuapp.com/api/usuario')
   .then(res => {
     //console.log(res.data)
     this.setState({
       dataUsuario: res.data
     })
   }).catch(err => {
     console.log(err.message)
   })
}

  componentDidMount () {
    //mejor lugar para hacer unas peticiones
    this.peticionGet()
  }

  render() {
    console.log(this.state.dataUsuario);
    
    return (
      <>
        <form>
          <div className='cando mt-5'>
            <div className="form-group sasi">
              <label for="exampleInputUser"></label>
              <input type="user" className="form-control" id="exampleInputUser1" aria-describedby="userHelp" placeholder="Usuario" />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <div className="form-group sasi">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <div className="form-group sasi">
              <label for="exampleInputPassword1"></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
            </div>

            <div className="form-group sasi">
              <label for="exampleInputPassword1"></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Verificar contraseña" />
            </div>
            <Link to="/inicio" className="text-decoration-none">
              <button type="submit" className="btn btn-success cando">Registrese</button>
            </Link>
          </div>
        </form>


      </>
    )
  }
};

export default Main4;