import React from 'react';
import { Button, Checkbox, List } from 'antd';

const Tarea = ({ tarea, alCompletar, alEliminar, alEditar }) => {
  return (
    <List.Item className="tarea">
      <Checkbox onChange={() => alCompletar(tarea)} defaultChecked={tarea.completo}>
        {tarea.titulo}
      </Checkbox>
      <Button onClick={() => alEditar(tarea)}>✎</Button>
      <Button onClick={() => alEliminar(tarea)}>×</Button>
    </List.Item>
  );
};

export default Tarea;