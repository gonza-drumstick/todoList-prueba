import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';



class App extends Component {
  render() {
    return (
        <div className="App">
            <Header
                titulo="Lista de Tareas"
            />
           <Formulario />
        </div>
    );
  }
}

export default App;
