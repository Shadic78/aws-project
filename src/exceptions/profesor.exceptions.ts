export class ProfesorNotFoundException extends Error {
  constructor(id?: number) {
    if (id) {
      super(`El profesor con id: ${id} no esta registrado.`);
      return;
    }
    super('Profesor no encontrado');
  }
}

export class ProfesorAlreadyExistsException extends Error {
  constructor(id?: number) {
    if (id) {
      super(`Ya hay un profesor con id: ${id}.`);
      return;
    }
    super('Ya existe un profesor registrado con la id provista');
  }
}
