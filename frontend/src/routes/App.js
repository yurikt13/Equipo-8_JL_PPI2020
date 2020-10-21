import React from 'react';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Recordatorios from '../pages/Recordatorios';
import SingIn from '../pages/SingIn';
import Seleccion from '../pages/Seleccion';
import Facebook from '../pages/Facebook';
import Planconflor from '../pages/Planconflor';
import Plantsinflor from '../pages/Plantsinflor';
import Registro from '../pages/Registro';
import Alfred from '../pages/Alfred';
import Ayuda from '../pages/Ayuda';
import Calendula from '../pages/Calendula';
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
         <Route path="/plantasconflor" component={Planconflor} />
         <Route path="/plantasinflor" component={Plantsinflor} />
         <Route path="/recordatorios" component={Recordatorios} />
         <Route path="/alfred" component={Alfred} />
         <Route path="/ayuda" component={Ayuda} />
         <Route path="/calendula" component={Calendula} />
         
       </Switch>
      </BrowserRouter>
    )
}


export default App;