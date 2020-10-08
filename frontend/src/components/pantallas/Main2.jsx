import React from 'react';
import './App.css';
//import facebook from '../facebook/img3/facebook.png';
import facebook from '../pantallas/images/facebook.png';

function Main2() {
    return (
        <>
            <div className="Container">
                <div className='campo'>
                    <p>Ingresar con Facebook</p>
                </div>
            </div>

            <div className='paloma'>
                <img src={facebook} />
            </div>

            <div className='cortesa'>
                <h1>Continuar como</h1>
                <h1>Taejunk</h1>
                <p>Logun App recibira</p>
                <p>su perfil publico</p>
                <button>Ingresar ya</button>
                <p></p>
                <p>Esto no permite que la aplicacion publique en facebook</p>
            </div>
        </>
    );
}
export default Main2;