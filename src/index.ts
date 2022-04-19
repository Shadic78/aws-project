import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import { app } from './app';
import { alumnosRouter } from './routes/alumno.router';

dotenv.config();

getConnectionOptions().then(connectionOptions => {
  createConnection(connectionOptions).then(() => {
    app.use(alumnosRouter);
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running on port ${process.env.SERVER_PORT}`);
});