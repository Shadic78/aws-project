import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'Profesores'})
export class Profesor {
  @PrimaryColumn()
  id: number;

  @Column()
  numeroEmpleado: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  horasClase: number;

}