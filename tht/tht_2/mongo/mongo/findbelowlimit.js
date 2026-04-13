import './dbconnect.js';
import mongoose from 'mongoose';
import Student from './models/Student.js';

async function findBelowLimit(limit) {
  const students = await Student.find({
    studypoints: { $lt: limit },
  }).catch((err) => {
    throw err;
  });

  console.log(students);

  await mongoose.disconnect();
}

findBelowLimit(100);
