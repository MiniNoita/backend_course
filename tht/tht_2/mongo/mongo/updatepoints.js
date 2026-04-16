import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';

async function updatePoints(student, newPoints) {
  const result = await Student.updateOne(
    {
      studentcode: student,
    },
    {
      $inc: { studypoints: newPoints },
    },
  )

    .catch((err) => {
      throw err;
    });

  console.log(
    `Student with code ${student} studypoint has been updated by ${newPoints}`,
  );
  mongoose.disconnect();
}

updatePoints('m1234', -2);
