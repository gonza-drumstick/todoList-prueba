import React, { Component } from 'react';
import { Button, Form, Input, notification } from 'antd';
import PropTypes from 'prop-types';

class Formulario extends Component {
  static propTypes = {
    alEnviar: PropTypes.func.isRequired
  };

  state = { titulo: undefined };

	agregarTarea = e => {
    const { alEnviar } = this.props;
    const { titulo } = this.state;

    if (!titulo) {
      return notification.error({ message: 'El título es obligatorio' });
    }

    if (typeof alEnviar === 'function') {
      alEnviar({ titulo, completo: false });
      this.setState({ titulo: '' });
    }
  };
  
  actualizarTitulo = e => {
    const { value } = e.target;
    this.setState({ titulo: value });
  };

  render() {
    return (
      <Form>
        <Form.Item label="Nueva tarea" isRequired>
          <Input
            placeholder="Título de la tarea"
            onChange={this.actualizarTitulo}
            onPressEnter={this.agregarTarea} />
        </Form.Item>

        <Button type="primary" onClick={this.agregarTarea}>
          Agregar Tarea
        </Button>
      </Form>
    );
  }
}

export default Formulario;


