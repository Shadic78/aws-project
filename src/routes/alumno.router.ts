import express from 'express';
import { getAlumnos } from '../services/alumno.service';

export const AlumnosRouter = () => {
  const router = express.Router();

  router.get('/alumnos', getAlumnos);

  return { router };
};