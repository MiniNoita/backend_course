import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';

const newGrade = {
  coursecode: 'XYZ1234',
  grade: 3,
};

async function addGrade(student, newGrade) {
  const result = Student.updateOne(
    {
      studentcode: student,
    },
    {
      $push: { grades: newGrade },
      $inc: { studypoints: 5 },
    },
  ).catch((err) => {
    throw err;
  });

  console.log('Grade upgraded ' + result);
  console.log(result.matchedCount + ' document updated.');

  mongoose.disconnect();
}

addGrade('m1234', newGrade);
