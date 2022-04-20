export class AlumnoNotFoundException extends Error {
  constructor(id?: number) {
    if (id) {
      super(`El alumno con id: ${id} no esta registrado.`);
      return;
    }
    super('Alumno no encontrado');
  }
}

export class AlumnoAlreadyExistsException extends Error {
  constructor(id?: number) {
    if (id) {
      super(`Ya hay un alumno con id: ${id}.`);
      return;
    }
    super('Ya existe un alumno registrado con la id provista');
  }
}