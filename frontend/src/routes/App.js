import React from 'react';
import Chat from '../pages/Chat';
import Alfred from '../pages/Alfred';
import Home from '../pages/Home';
import Registro from '../pages/Registro';
import Recordatorios from '../pages/Recordatorios';
import Ayuda from '../pages/Ayuda';
import SingIn from '../pages/SingIn';
import Seleccion from '../pages/Seleccion';
import Cadacuanto from '../pages/Cadacuanto';
import Fecha from '../pages/Fecha';
import Facebook from '../pages/Facebook';
import Plantsinflor from '../pages/Plantsinflor';
import Alarma from '../pages/Alarma';
import Alarma2 from '../pages/Alarma2';
import Alarma3 from '../pages/Alarma3';
import Alarma4 from '../pages/Alarma4';
import Recordatorios2 from '../pages/Recordatorios2';
import Planconflor from '../pages/Planconflor';
import Calendula from '../pages/Calendula';
import Contactos from '../pages/Ayuda';
import CycasRevolutas from '../pages/CycasRevolutas';
import Mas from '../pages/Mas';
import Footer from '../components/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={SingIn} />
         <Route  path="/inicio" component={Home} />
         <Route path="/facebook" component={Facebook} />
         <Route path="/registrese" component={Registro} />
         <Route  path="/contactos" component={Contactos} />
         <Route  path="/chat" component={Chat} />
         <Route  path="/alfred" component={Alfred} />
         <Route path="/plantasconflor" component={Planconflor} />
         <Route path="/calendula" component={Calendula} />
         <Route path="/seleccionar" component={Seleccion}/>
         <Route path="/ayuda" component={Ayuda}/>
         <Route path="/plantsinflor"component={Plantsinflor}/>
         <Route path="/cycasrevolutas" component={CycasRevolutas}/>
         <Route path="/recordatorios"component={Recordatorios}/>
         <Route path="/alarma" component={Alarma} />
         <Route path="/fecha" component={Fecha} />
         <Route path="/cadacuanto" component={Cadacuanto} />
         <Route path="/alarma2" component={Alarma2}/>
         <Route path="/alarma3" component={Alarma3}/>
         <Route path="/alarma4" component={Alarma4}/>
         <Route path="/recordatorios2"component={Recordatorios2}/>
         <Route path="/mas"component={Mas}/>
         <Route path="/footer" component={Footer}/>
        



       </Switch>
      </BrowserRouter>
    )
}


export default App;