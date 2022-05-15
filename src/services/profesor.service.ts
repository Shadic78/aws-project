import { getCustomRepository, Repository } from 'typeorm';
import { ProfesorRepository } from '../repositories/profesor.repository';
import { Profesor } from '../entities/profesor.entity';
import { ProfesorNotFoundException, ProfesorAlreadyExistsException } from '../exceptions/profesor.exceptions';

export class ProfesorService {
  private profesoresRepository: Repository<Profesor>;
  
  constructor() {
    this.profesoresRepository = getCustomRepository(ProfesorRepository);
  }

  getAll = async () => {
    const profesores: Profesor[] = await this.profesoresRepository.find();
    return profesores;
  };

  getOne = async (id: number) => {
    const profesor = await this.profesoresRepository.findOne({id});
    if(!profesor) throw new ProfesorNotFoundException(id);
    return profesor;
  };

  createOne = async (data: any) => {
    const providedProfesor = new Profesor(data);
    const registeredProfesor = await this.profesoresRepository.findOne({id: providedProfesor.id});
    if(registeredProfesor) throw new ProfesorAlreadyExistsException(providedProfesor.id);
    return await this.profesoresRepository.save(providedProfesor);
  };

  updateOne = async (id: number, data: any) => {
    if(data?.nombres == null) throw new Error();
    const profesor = await this.profesoresRepository.findOne({id});
    if(!profesor) throw new ProfesorNotFoundException(id);
    const updatedProfesor = {...profesor, ...data} as Profesor;
    return await this.profesoresRepository.save(updatedProfesor);
  };

  deleteOne = async (id: number) => {
    const profesor = await this.profesoresRepository.findOne({id});
    if(!profesor) throw new ProfesorNotFoundException(id);
    return await this.profesoresRepository.delete(profesor);
  };

}
