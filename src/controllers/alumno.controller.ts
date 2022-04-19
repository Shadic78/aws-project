import { Request, Response } from 'express';
import { getCustomRepository, Repository } from 'typeorm';
import { AlumnoRepository } from '../repositories/alumno.repository';
import { Alumno } from '../entities/alumno.entity';

export const getAlumnos = async (req: Request, res: Response) => {
  const alumnosRepository: Repository<Alumno> = getCustomRepository(AlumnoRepository);
  const alumnos = await alumnosRepository.find();
  res.send({alumnos}).status(200);
};
