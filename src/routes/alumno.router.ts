import express from 'express';
import { getAlumnos } from '../controllers/alumno.controller';

/*export const AlumnosRouter = () => {
  const router = express.Router();

  router.get('/alumnos', getAlumnos);

  return { router };
};*/
const alumnosRouter = express.Router();

alumnosRouter.get('/alumnos', getAlumnos);

export { alumnosRouter };
