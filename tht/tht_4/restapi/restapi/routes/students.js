import express from 'express';
import StudentController from '../controllers/studentcontroller.js';

const studentsRoute = express.Router();

studentsRoute.get('/', StudentController.findAll);

studentsRoute.get('/:id', StudentController.findById);

studentsRoute.get('/code/:studentcode', StudentController.findByStudentCode);

studentsRoute.post('/addstudent', StudentController.addStudent);

export default studentsRoute;
