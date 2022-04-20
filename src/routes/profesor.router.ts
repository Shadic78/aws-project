import express from 'express';
import { ProfesorController } from '../controllers/profesor.controller';
import { ProfesorService } from '../services/profesor.service';

export const ProfesoresRouter = () => {
  const router = express.Router();
  const profesorService: ProfesorService = new ProfesorService();
  const profesorController: ProfesorController = new ProfesorController(profesorService);

  router.get('/profesores', profesorController.getProfesores);
  router.get('/profesores/:id', profesorController.getOneProfesor);
  router.post('/profesores', profesorController.createProfesor);
  router.put('/profesores/:id', profesorController.editProfesor);
  router.delete('/profesores/:id', profesorController.deleteProfesor);
  router.delete('/profesores', profesorController.unsupportedMethod);

  return { router };
};
