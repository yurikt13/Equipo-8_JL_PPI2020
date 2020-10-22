import React from 'react';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
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
import Planconflor from '../pages/Planconflor';
import Contactos from '../pages/Ayuda';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={SingIn} />
         <Route  path="/inicio" component={Home} />
         <Route path="/facebook" component={Facebook} />
         <Route path="/registrese" component={Recordatorios} />
         <Route  path="/contactos" component={Contactos} />
         <Route path="/plantasconflor" component={Planconflor} />
         <Route  path="/chat" component={Chat} />
         <Route  path="/contactos" component={Contactos} />
         <Route path="/seleccionar" component={Seleccion}/>
         <Route path="/ayuda" component={Ayuda}/>
         <Route path="/Plantsinflor"component={Plantsinflor}/>
         <Route exact path="/" component={Alarma} />
         <Route exact path="/fecha" component={Fecha} />
         <Route exact path="/" component={Alarma2} />
         <Route exact path="/cadacuanto" component={Cadacuanto} />
         <Route exact path="/" component={Alarma3} />
         <Route exact path="/" component={Alarma4} />



       </Switch>
      </BrowserRouter>
    )
}


export default App;