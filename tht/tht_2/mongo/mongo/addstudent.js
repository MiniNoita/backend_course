import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';
import NewStudentObject from './NewStudentObject.js';

const newStudent = Student(NewStudentObject);

async function createStudent(newStudent) {
  const result = await Student.create(newStudent).catch((err) => {
    console.log(err);
  });
  // tuloksena saadaan luotu task
  console.log('New student created. ' + result);
  await mongoose.disconnect();
}

createStudent(newStudent);
