import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();

app.get('/users', (req, res) => {
  res.send({message: 'Hello'}).status(200);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running on port ${process.env.SERVER_PORT}`);
});