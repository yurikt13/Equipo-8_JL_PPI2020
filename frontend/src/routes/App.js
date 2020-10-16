import React from 'react';
import Chat from '../pages/Chat';
import Contactos from '../pages/Contactos';
import Home from '../pages/Home';
<<<<<<< HEAD
import Recordatorios from '../pages/Recordatorios';
=======
import Recordatorio from '../pages/Recordatorio';
import Ayuda from '../pages/Ayuda';
>>>>>>> 52357509f4eae64cb5897a714edc946ebd61b058
import SingIn from '../pages/SingIn';
import Seleccion from '../pages/Seleccion';
import Facebook from '../pages/Facebook';
<<<<<<< HEAD
import Planconflor from '../pages/Planconflor';
import Plantsinflor from '../pages/Plantsinflor';
=======
import Seleccion2 from '../pages/Seleccion2';
import Planflor from '../pages/Planflor';
import Planconflor from '../pages/Planconflor';
import Mandala1 from '../pages/Mandala1';
>>>>>>> 52357509f4eae64cb5897a714edc946ebd61b058
import Registro from '../pages/Registro';
import Alfred from '../pages/Alfred';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={SingIn} />
         <Route  path="/inicio" component={Home} />
<<<<<<< HEAD
         <Route path="/facebook" component={Facebook} />
         <Route path="/registrese" component={Registro} />
         <Route  path="/chat" component={Chat} />
         <Route  path="/contactos" component={Contactos} />
         <Route path="/plantasconflor" component={Planconflor} />
         <Route path="/plantasinflor" component={Plantsinflor} />
         <Route path="/recordatorios" component={Recordatorios} />
         <Route path="/alfred" component={Alfred} />
=======
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



>>>>>>> 52357509f4eae64cb5897a714edc946ebd61b058
         
       </Switch>
      </BrowserRouter>
    )
}


export default App;