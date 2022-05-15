import { getCustomRepository, Repository } from 'typeorm';
import { AlumnoRepository } from '../repositories/alumno.repository';
import { Alumno } from '../entities/alumno.entity';
import { AlumnoNotFoundException, AlumnoAlreadyExistsException } from '../exceptions/alumno.exceptions';

export class AlumnoService {
  private alumnosRepository: Repository<Alumno>;
  
  constructor() {
    this.alumnosRepository = getCustomRepository(AlumnoRepository);
  }

  getAll = async () => {
    const alumnos: Alumno[] = await this.alumnosRepository.find();
    return alumnos;
  };

  getOne = async (id: number) => {
    const alumno = await this.alumnosRepository.findOne({id});
    if(!alumno) throw new AlumnoNotFoundException(id);
    return alumno;
  };

  createOne = async (data: any) => {
    const providedAlumno = new Alumno(data);
    const registeredAlumno = await this.alumnosRepository.findOne({id: providedAlumno.id});
    if(registeredAlumno) throw new AlumnoAlreadyExistsException(providedAlumno.id);
    return await this.alumnosRepository.save(providedAlumno);
  };

  updateOne = async (id: number, data: any) => {
    if(data?.nombres == null) throw new Error();
    const alumno = await this.alumnosRepository.findOne({id});
    if(!alumno) throw new AlumnoNotFoundException(id);
    const updatedAlumno = {...alumno, ...data};
    return await this.alumnosRepository.save(updatedAlumno);
  };

  deleteOne = async (id: number) => {
    const alumno = await this.alumnosRepository.findOne({id});
    if(!alumno) throw new AlumnoNotFoundException(id);
    return await this.alumnosRepository.delete(alumno);
  };

}
