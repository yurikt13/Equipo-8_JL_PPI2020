import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Main4() {
  return (
    <>

      <form>
        <div className='cando mt-5'>
          <div className="form-group sasi">
            <label for="exampleInputUser"></label>
            <input type="user" className="form-control" id="exampleInputUser1" aria-describedby="userHelp" placeholder="Usuario"/>
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group sasi">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group sasi">
            <label for="exampleInputPassword1"></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
          </div>

          <div className="form-group sasi">
            <label for="exampleInputPassword1"></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Verificar contraseña"/>
          </div>
          <Link to="/inicio" className="text-decoration-none">
          <button type="submit" className="btn btn-success cando">Registrese</button>
          </Link>
        </div>
      </form>


    </>
  )

};

export default Main4;