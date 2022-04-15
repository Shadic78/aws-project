import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AlumnoRepository } from '../repositories/alumno.repository';

export const getAlumnos = async (req: Request, res: Response) => {
  const alumnosRepository = getCustomRepository(AlumnoRepository);
  const alumnos = await alumnosRepository.find();
  res.send({alumnos}).status(200);
};
