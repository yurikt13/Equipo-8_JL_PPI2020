import React from 'react';

import Principal from '../pages/Principal';
import SingIn from '../pages/SingIn';
import Facebook from '../pages/Facebook';
import Registro from '../pages/Registro';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Alfred from '../pages/Alfred';
import Planconflor from '../pages/Planconflor';
import Calendula from '../pages/Calendula';
import Plantsinflor from '../pages/Plantsinflor';
import CycasRevolutas from '../pages/CycasRevolutas';
import Recordatorios from '../pages/Recordatorios';
import AñadirPlanta from '../pages/AñadirPlanta';
import Seleccion from '../pages/Seleccion';
import Cadacuanto from '../pages/Cadacuanto';
import Fecha from '../pages/Fecha';
import Alarma from '../pages/Alarma';
import Alarma2 from '../pages/Alarma2';
import Alarma3 from '../pages/Alarma3';
import Alarma4 from '../pages/Alarma4';
import Recordatorios2 from '../pages/Recordatorios2';
import Post from '../pages/Post';
import MiInfo from '../pages/MiInfo';
import Mas from '../pages/Mas';
import Configuraciones from '../pages/Configuraciones';
import MiProgreso from '../pages/MiProgreso';
import ProgresCalathea from '../pages/ProgresCalathea';
import Quieresdivert from '../pages/Quieresdivert';
import Mandala1 from '../pages/Mandala1';
import Acerca from '../pages/Acerca';


import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App () {
    return(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Principal} />
         <Route exact path="/login" component={SingIn} />
         <Route path="/facebook" component={Facebook} />
         <Route path="/registrese" component={Registro} />
         <Route  path="/inicio" component={Home} />
         <Route  path="/chat" component={Chat} />
         <Route path="/alfred" component={Alfred} />
         <Route path="/plantasconflor" component={Planconflor} />
         <Route path="/calendula" component={Calendula} />
         <Route path="/plantsinflor"component={Plantsinflor}/>
         <Route path="/cycasrevolutas"component={CycasRevolutas}/>
         <Route path="/recordatorios" component={Recordatorios}/>
         <Route path="/addPlant" component={AñadirPlanta}/>
         <Route path="/seleccionar" component={Seleccion}/>
         <Route path="/acercade" component={Acerca}/>
         <Route exact path="/alarma" component={Alarma} />
         <Route exact path="/fecha" component={Fecha} />
         <Route exact path="/alarma2" component={Alarma2} />
         <Route exact path="/cadacuanto" component={Cadacuanto} />
         <Route exact path="/alarma3" component={Alarma3} />
         <Route exact path="/alarma4" component={Alarma4} />
         <Route path="/recordatorios2" component={Recordatorios2}/>
         <Route path="/mas" component={Mas}/>
         <Route path="/post" component={Post}/>
         <Route path="/informacion" component={MiInfo}/>
         <Route path="/quieresdivertirte" component={Quieresdivert}/>
         <Route path="/mandala1" component={Mandala1}/>
         <Route path="/configuraciones" component={Configuraciones}/>
         <Route path="/miprogreso" component={MiProgreso}/>
         <Route path="/progresocalathea" component={ProgresCalathea}/>
       </Switch>
      </BrowserRouter>
    )
}


export default App;

