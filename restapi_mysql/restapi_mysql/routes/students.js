/* eslint-disable new-cap */
import { Router } from 'express';
const router = Router();
import StudentController from '../controllers/studentcontroller.js';

// http://localhost:3000/students/
router.get('/', StudentController.findAll);

// http://localhost:3000/students/
router.post('/', StudentController.addStudent);

// Tähän muut reitit

export default router;
