import { Request, Response } from 'express';
import { Profesor } from '../entities/profesor.entity';
import { ProfesorService } from '../services/profesor.service';
import { ProfesorNotFoundException, ProfesorAlreadyExistsException } from '../exceptions/profesor.exceptions';

export class ProfesorController {
  profesorService: ProfesorService;

  constructor(profesorService: ProfesorService) {
    this.profesorService = profesorService;
  }

  getProfesores = async (req: Request, res: Response) => {
    const profesores: Profesor[] = await this.profesorService.getAll();
    return res.status(200).json({profesores});
  };

  getOneProfesor = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const profesor = await this.profesorService.getOne(id);
      return res.status(200).json(profesor); 
    } catch (error) {
      if(error instanceof ProfesorNotFoundException) {
        return res.status(404).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  createProfesor = async (req: Request, res: Response) => {
    const data = req.body;
    try {
      const profesor = await this.profesorService.createOne(data);
      if(!profesor) return res.send({message: 'Error'}).status(500);
      return res.status(201).json(profesor);
    } catch (error) {
      if(error instanceof ProfesorAlreadyExistsException) {
        return res.status(409).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  editProfesor = async (req: Request, res: Response) => {
    const newData = req.body;
    try {
      const id = parseInt(req.params.id);
      const updatedProfesor = await this.profesorService.updateOne(id, newData);
      return res.status(200).json(updatedProfesor);
    } catch (error) {
      if(error instanceof ProfesorNotFoundException) {
        return res.status(404).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  deleteProfesor = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const deletedProfesor = await this.profesorService.deleteOne(id);
      return res.status(200).json(deletedProfesor);
    } catch (error) {
      if(error instanceof ProfesorNotFoundException) {
        return res.status(404).json({error: error.message});
      }
      return res.status(400).json({message: 'Bad request'});
    }
  };

  unsupportedMethod = async (req: Request, res: Response) => {
    return res.status(405).json({error: 'Unsupported method'});
  }

}
