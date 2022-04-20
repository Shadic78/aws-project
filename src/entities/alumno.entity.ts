import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity({name: 'Alumnos'})
export class Alumno extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  matricula: string;

  @Column()
  promedio: number;

  constructor(alumno?: Partial<Alumno>) {
    super();
    Object.assign(this, alumno);
  }

}