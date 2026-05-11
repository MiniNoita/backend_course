import express from 'express';
import StudentController from '../controllers/studentcontroller.js';
import verifyToken from '../verifytoken.js';

const studentsRoute = express.Router();

studentsRoute.get('/', StudentController.findAll);

studentsRoute.get('/:id', StudentController.findById);

studentsRoute.get('/code/:studentcode', StudentController.findByStudentCode);

studentsRoute.post('/addstudent', verifyToken, StudentController.addStudent);

studentsRoute.delete('/:id', verifyToken, StudentController.deleteStudent);

studentsRoute.put(
  '/updategrade/:scode/:ccode',
  verifyToken,
  StudentController.updateGrade,
);

//http://localhost:3000/students/updategp/t1234/HTS10600
// {"grade": 3}

studentsRoute.put(
  '/updategp/:scode/:ccode',
  verifyToken,
  StudentController.updateGradeAndPoints,
);

//http://localhost:3000/students/updatestudent/m1234/name --> this changes the name
//{"value": "Joku muu Matti"}
studentsRoute.put(
  '/updatestudent/:scode/:update',
  verifyToken,
  StudentController.updateStudent,
);

studentsRoute.get('/findbelow/:limit', StudentController.findBelowLimit);

//http://localhost:3000/students/findbycourse/HTS10600
studentsRoute.get('/findbycourse/:ccode', StudentController.findByCourse);

export default studentsRoute;
