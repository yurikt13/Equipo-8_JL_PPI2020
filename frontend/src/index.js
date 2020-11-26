import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import Axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const url = "https://Serviciosback.yurimonroy.repl.co";

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class index extends Component {
  state={
    data:[]
  }
  

  peticionGet=() => {
    Axios.get.apply(url).then(response.data)
  }

   componentDidMount() {
     this.peticionGet();
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

