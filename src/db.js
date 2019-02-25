import PouchDB from 'pouchdb';

class Database {
  constructor(nombre = 'todo-list') {
    this.db = new PouchDB(nombre);
  }

  async agregarTarea (tarea) {
    return await this.db.post(tarea);
  }

  async editarTarea (tarea) {
    return this.db.get(tarea._id)
      .then(t => this.db.put({ ...tarea, _rev: t._rev }));
  }

  async borrarTarea (tarea) {
    return await this.db.remove(tarea);
  }

  async obtenerTareas () {
    const { rows } = await this.db.allDocs({ include_docs: true });
    return rows.map(row => row.doc);
  }
}

export default Database;