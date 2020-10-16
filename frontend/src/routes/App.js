import React from 'react';
import Chat from '../pages/Chat';
import Contactos from '../pages/Contactos';
import Home from '../pages/Home';
import Recordatorio from '../pages/Recordatorio';
import Ayuda from '../pages/Ayuda';
import SingIn from '../pages/SingIn';
import Seleccion from '../pages/Seleccion';
import Facebook from '../pages/Facebook';
import Seleccion2 from '../pages/Seleccion2';
import Planflor from '../pages/Planflor';
import Planconflor from '../pages/Planconflor';
import Mandala1 from '../pages/Mandala1';
import Registro from '../pages/Registro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={SingIn} />
         <Route  path="/inicio" component={Home} />
         <Route  path="/chat" component={Chat} />
         <Route  path="/contactos" component={Contactos} />
         <Route path= "/facebook" component={Facebook}/>
         <Route path="/registro" component={Registro}/>
         <Route path="/seleccionar" component={Seleccion}/>
         <Route path="/mandala" component={Mandala1}/>
         <Route path="/seleccion2" component={Seleccion2}/>
         <Route path="/ayuda" component={Ayuda}/>
         <Route path="/misplantas" component={Recordatorio}/>
         <Route path="/plantssinflor" component={Planflor}/>
         <Route path="/plantsflor" component={Planconflor}/>



         
       </Switch>
      </BrowserRouter>
    )
}


export default App;