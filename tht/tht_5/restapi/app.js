import express from 'express';
import './dbconnection.js';

const port = Number(process.env.PORT) || 8080;
const app = express();

import studentsRoute from './routes/students.js';
app.use(express.json());
app.use('/students', studentsRoute);

app.listen(port, () => {
  console.log('Listening to port: ', port);
});
