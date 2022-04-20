import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import { app } from './app';
import { AlumnosRouter } from './routes/alumno.router';
import { ProfesoresRouter } from './routes/profesor.router';

dotenv.config();

getConnectionOptions().then(connectionOptions => {
  createConnection(connectionOptions).then(() => {
    app.use(AlumnosRouter().router);
    app.use(ProfesoresRouter().router);
  });
});

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});