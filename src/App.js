import React, { Component } from 'react';
import { Layout, List, notification } from 'antd';
import Formulario from './componentes/Formulario';
import Tarea from './componentes/Tarea';
import Database from './db';
import 'antd/dist/antd.css';
import './css/App.css';

const { Header, Content } = Layout;

class App extends Component {
  state = { tareas: [] };
  db = new Database();

  async obtenerTareas () {
    this.setState({ tareas: await this.db.obtenerTareas() });
  }

  async componentDidMount () {
    this.obtenerTareas();
  }

  agregarTarea = async tarea => {
    await this.db.agregarTarea(tarea);
    this.obtenerTareas();
  };

  alCompletar = async tarea => {
    const payload = { ...tarea, completo: !tarea.completo };

    await this.db.editarTarea(payload);
    this.obtenerTareas();
  };

  alEliminar = async tarea => {
    await this.db.borrarTarea(tarea);
    this.obtenerTareas();
  };

  alEditar = async tarea => {
    const titulo = prompt('Nuevo título');
    const payload = { ...tarea, titulo };
    await this.db.editarTarea(payload);
    notification.success({ message: 'Tarea editada' });
    this.obtenerTareas();
  };

  render() {
    return (
      <Layout className="App">
        <Header>Lista de Tareas</Header>
        <Content>
          <Formulario alEnviar={this.agregarTarea} />
          <List
            dataSource={this.state.tareas}
            renderItem={tarea => (
              <Tarea
                tarea={tarea}
                alCompletar={this.alCompletar}
                alEliminar={this.alEliminar}
                alEditar={this.alEditar} />
            )}/>
        </Content>
      </Layout>
    );
  }
}

export default App;
