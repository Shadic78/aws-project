import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({name: 'Profesores'})
export class Profesor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroEmpleado: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  horasClase: number;

  constructor(profesor?: Partial<Profesor>) {
    super();
    Object.assign(this, profesor);
  }

}