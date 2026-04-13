import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';

async function findAllStudents() {
  const students = await Student.find({}).catch((err) => {
    throw err;
  });

  console.log(students);

  await mongoose.disconnect();
}

findAllStudents();
