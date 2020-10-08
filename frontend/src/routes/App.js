import React from 'react';
import Chat from '../pages/Chat';
import Contactos from '../pages/Contactos';
import Home from '../pages/Home';
import Recordatorio from '../pages/Recordatorio';
import SingIn from '../pages/SingIn';
import Facebook from '../pages/Facebook';
import Planflor from '../pages/Planflor';
import Planconflor from '../pages/Planconflor';
import Registro from '../pages/Registro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route  path="/" component={Facebook} />
         <Route exact path="/inicio" component={Home} />
         <Route  path="/chat" component={Chat} />
         <Route  path="/contactos" component={Contactos} />
         
       </Switch>
      </BrowserRouter>
    )
}


export default App;