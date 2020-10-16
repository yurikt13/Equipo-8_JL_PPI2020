import React from 'react';
import './App.css';
import man1 from '../pantallas/images/man1.jpg';
import man2 from '../pantallas/images/man2.jpg';
import man3 from '../pantallas/images/man3.jpg';

function Main27(){
    return(
      <>
      <h1>MANDALAS</h1>
        <button><img src={man1} className="turara" alt="..."/></button>
        <button><img src={man2} className="turcon" alt="..."/></button>
        <button><img src={man3} className="zaza" alt="..."/></button>

      </>
    )
};
export default Main27;