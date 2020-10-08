import React from 'react';
import './App.css';

function Main4 () {
    return(
        <>
        
    
        <form>
            <div className='cando'>
  <div className="form-group sasi">
    <label for="exampleInputEmail1">Usuario</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>

  <div className="form-group sasi">
    <label for="exampleInputPassword1">Correo electronico</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="form-group sasi">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="form-group sasi">
    <label for="exampleInputPassword1">Verificar contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary cando ">Registrarse</button>
  </div>
</form>


        </>
    )

};

export default Main4;