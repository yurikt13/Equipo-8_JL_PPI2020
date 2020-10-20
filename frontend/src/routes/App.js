import React from 'react';
import Chat from '../pages/Chat';
import Contactos from '../pages/Contactos';
import Home from '../pages/Home';
import Recordatorios from '../pages/Recordatorios';
import Ayuda from '../pages/Ayuda';
import SingIn from '../pages/SingIn';
import Seleccion from '../pages/Seleccion';
import Seleccion2 from '../pages/Seleccion2';
import Seleccion3 from '../pages/Seleccion3';
import Facebook from '../pages/Facebook';
import Plantsinflor from '../pages/Plantsinflor';
import Alarma from '../pages/Alarma';
import Planconflor from '../pages/Planconflor';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route exact path="/sipa" component={SingIn} />
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
         <Route exact path="/seleccionar3" component={Seleccion3} />
         <Route exact path="/bnm" component={Seleccion2} />



       </Switch>
      </BrowserRouter>
    )
}


export default App;