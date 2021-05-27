import logo from './logo.svg';
import './App.css';
import React from 'react';
import{ BrowserRouter as Router, Route} from "react-router-dom";
import Menu from './Vistas/Menu/Menu';
import Registro from './Vistas/Registro/Registro'
import Inicio from './Vistas/Inicio/Inicio'

function App() {
  return (
    <Router>
      <switch>
        <Route exact path='/Menu'component={Menu} />
        <Route exact path='/Registro'component={Registro} />
        <Route exact path='/'component={Inicio} />
        </switch>
    </Router>
  );
}

export default App;
