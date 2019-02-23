import React, { Component } from 'react';
import { Button} from 'antd';
import 'antd/dist/antd.css';

class Formulario extends Component {
    
	agregarTarea = (e) => {
		e.preventDefault();
	}


    render() {
        return (
            
            
            <Button type="primary" onClick={this.agregarTarea}>Botonaso</Button>
            
        );
    }
}

export default Formulario;


