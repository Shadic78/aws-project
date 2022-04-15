import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({name: 'Alumnos'})
export class Alumno {
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

}