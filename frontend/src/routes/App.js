import React from 'react';
import Chat from '../pages/Chat';
import Contactos from '../pages/Contactos';
import Home from '../pages/Home';
import Recordatorios from '../pages/Recordatorios';
import SingIn from '../pages/SingIn';
import Facebook from '../pages/Facebook';
import Planconflor from '../pages/Planconflor';
import Plantsinflor from '../pages/Plantsinflor';
import Registro from '../pages/Registro';
import Alfred from '../pages/Alfred';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={SingIn} />
         <Route  path="/inicio" component={Home} />
         <Route path="/facebook" component={Facebook} />
         <Route path="/registrese" component={Registro} />
         <Route  path="/chat" component={Chat} />
         <Route  path="/contactos" component={Contactos} />
         <Route path="/plantasconflor" component={Planconflor} />
         <Route path="/plantasinflor" component={Plantsinflor} />
         <Route path="/recordatorios" component={Recordatorios} />
         <Route path="/alfred" component={Alfred} />
         
       </Switch>
      </BrowserRouter>
    )
}


export default App;