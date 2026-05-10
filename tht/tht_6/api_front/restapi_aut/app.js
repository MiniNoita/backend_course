import express from 'express';
import cors from 'cors';
import './dbconnection.js';

const port = Number(process.env.PORT) || 8080;
const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

import studentsRoute from './routes/students.js';
app.use(express.json());
app.use('/students', studentsRoute);

import userRouter from './routes/users.js';
app.use('/users', userRouter);

app.listen(port, () => {
  console.log('Listening to port: ', port);
});
