import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import { app } from './app';
import { AlumnosRouter } from './routes/alumno.router';

dotenv.config();

getConnectionOptions().then(connectionOptions => {
  createConnection(connectionOptions).then(() => {
    app.use(AlumnosRouter().router);
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running on port ${process.env.SERVER_PORT}`);
});