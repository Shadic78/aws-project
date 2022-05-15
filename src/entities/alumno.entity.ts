import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({name: 'Alumnos'})
export class Alumno extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  matricula: string;

  @Column()
  promedio: number;

  @Column()
  fotoPerfilUrl: string;

  constructor(alumno?: Partial<Alumno>) {
    super();
    Object.assign(this, alumno);
  }

}