import { Request, Response } from 'express';
import { Alumno } from '../entities/alumno.entity';
import { AlumnoService } from '../services/alumno.service';
import { AlumnoNotFoundException, AlumnoAlreadyExistsException } from '../exceptions/alumno.exceptions';

export class AlumnoController {
  alumnoService: AlumnoService;

  constructor(alumnoService: AlumnoService) {
    this.alumnoService = alumnoService;
  }

  getAlumnos = async (req: Request, res: Response) => {
    const alumnos: Alumno[] = await this.alumnoService.getAll();
    return res.status(200).json({alumnos});
  };

  getOneAlumno = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const alumno = await this.alumnoService.getOne(id);
      return res.status(200).json(alumno); 
    } catch (error) {
      if(error instanceof AlumnoNotFoundException) {
        return res.status(404).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  createAlumno = async (req: Request, res: Response) => {
    const data = req.body;
    try {
      const alumno = await this.alumnoService.createOne(data);
      if(!alumno) return res.send({message: 'Error'}).status(500);
      return res.status(201).json(alumno);
    } catch (error) {
      if(error instanceof AlumnoAlreadyExistsException) {
        return res.status(409).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  editAlumno = async (req: Request, res: Response) => {
    const newData = req.body;
    try {
      const id = parseInt(req.params.id);
      const updatedAlumno = await this.alumnoService.updateOne(id, newData);
      return res.status(200).json(updatedAlumno);
    } catch (error) {
      if(error instanceof AlumnoNotFoundException) {
        return res.status(404).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  deleteAlumno = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const deletedAlumno = await this.alumnoService.deleteOne(id);
      return res.status(200).json(deletedAlumno);
    } catch (error) {
      if(error instanceof AlumnoNotFoundException) {
        return res.status(404).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  unsupportedMethod = async (req: Request, res: Response) => {
    return res.status(405).json({error: 'Unsupported method'});
  };

}
