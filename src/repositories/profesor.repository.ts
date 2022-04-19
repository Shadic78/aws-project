import { EntityRepository, Repository } from 'typeorm';
import { Profesor } from '../entities/profesor.entity';

@EntityRepository(Profesor)
export class ProfesorRepository extends Repository<Profesor> {}