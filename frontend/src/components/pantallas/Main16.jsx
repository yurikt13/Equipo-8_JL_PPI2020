import React, {Component} from 'react';
import './App.css';
import man1 from '../pantallas/images/man1.jpg';
import man2 from '../pantallas/images/man2.jpg';
import Alarma from '../pantallas/images/Alarma.PNG';
import alarmamm from '../pantallas/images/alarmamm.png';
import massx from '../pantallas/images/massx.png';
import { Link } from 'react-router-dom';
class Main16 extends  Component{
    constructor(props){
        super(props);
        this.state={

           carpa:<img src={Alarma} className="turcon" alt="..."/>,
           sacari: <img src={massx} className="turcon" alt="..."/>         
             
        }
    }

    handlekkk = () =>{
      this.setState({
          carpa: <img src={alarmamm} className="turcon" alt="..."/>
          
      })
   }
   handleccc = () =>{
    this.setState({
        sacari: <img src={alarmamm} className="turcon" alt="..."/>
        
    })
 }
   
    render(){
        return(
            <>
          {this.state.carpa}

          <Link to="/seleccionar3">
    <button>Seleccionar fecha</button>{'        '}
          </Link>

          <select name="horas">

            <option>Seleccionar hora(Ninguna)</option>

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
        <Link to="/bnm">
        <button>cada un día</button>
        </Link>

        <select name="horas">

          <option> Cuidado </option>
          <option>Podar</option>
          <option>Podar</option>
          <option>Podar</option>
          <option> Cuidado </option>
          <option> Cuidado </option>
          <option> Cuidado </option>
          <option> Cuidado </option>
          <option> Cuidado </option>

       </select>
      <div className="custom-control custom-switch" >
    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick= {this.handlekkk}/>
    <label className="custom-control-label" for="customSwitch1">Activar</label>
  </div>
  
   

</>
        );
    }
}
export default Main16;
