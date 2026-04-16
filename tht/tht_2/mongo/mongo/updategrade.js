import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';

async function updateGrade(student_code, course_code, newGrade) {
  const result = await Student.updateOne(
    {
      studentcode: student_code,
      'grades.coursecode': course_code,
    },
    { $set: { 'grades.$.grade': newGrade } },
  ).catch((err) => {
    throw err;
  });

  console.log(
    `Student with code ${student_code} grade has been updated for course ${course_code}. New grade ${newGrade}`,
  );
  console.log(result);
  mongoose.disconnect();
}

updateGrade('m1234', 'HTS10600', 2);
