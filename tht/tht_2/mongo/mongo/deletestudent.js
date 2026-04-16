import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';

async function deleteStudent(student_code) {
  await Student.deleteOne({ studentcode: student_code })
    .then(console.log(`Student deleted.`))
    .catch((err) => {
      throw err;
    });

  mongoose.disconnect();
}

deleteStudent('m1234');
