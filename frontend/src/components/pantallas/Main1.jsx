import React from 'react';
import { Link } from 'react-router-dom';

const Main1 = () => {

    return (

        <div className="container text-center mt-5">
            <form className="form-signin">
          <label for="inputEmail" className="sr-only" placeholder="Ingrese su usuario"></label>
          <input type="email" id="inputEmail" className="form-control mt-3 col-5" placeholder="Email address" required="" autofocus=""/>
          <label for="inputPassword" className="sr-only" placeholder="Contraseña"></label>
          <input type="password" id="inputPassword" className="form-control mt-3 col-5" placeholder="Password" required=""/>
          <Link to="/" className="text-decoration-none">
          <button className="btn btn-lg btn-primary btn-flex" type="submit">Ingresar</button>
          </Link>
          <div className="checkbox mb-3 mt-3">
            <label>
              <input/> o
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-flex" type="submit">Ingresar con Facebook</button>
          <button className="btn btn-lg btn-primary btn-flex" type="submit">Ingresar con Google</button>

          <p>¿No tiene usuario?</p>

          <button className="btn btn-lg btn-primary btn-flex" type="submit">REGISTRESE</button>

          <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
        </form>
        </div>
    )
};

export default Main1;