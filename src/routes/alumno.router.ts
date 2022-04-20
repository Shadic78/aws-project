import express from 'express';
import { AlumnoController } from '../controllers/alumno.controller';
import { AlumnoService } from '../services/alumno.service';

export const AlumnosRouter = () => {
  const router = express.Router();
  const alumnoService: AlumnoService = new AlumnoService();
  const alumnoController: AlumnoController = new AlumnoController(alumnoService);

  router.get('/alumnos', alumnoController.getAlumnos);
  router.get('/alumnos/:id', alumnoController.getOneAlumno);
  router.post('/alumnos', alumnoController.createAlumno);
  router.put('/alumnos/:id', alumnoController.editAlumno);
  router.delete('/alumnos/:id', alumnoController.deleteAlumno);
  router.delete('/alumnos', alumnoController.unsupportedMethod);

  return { router };
};
