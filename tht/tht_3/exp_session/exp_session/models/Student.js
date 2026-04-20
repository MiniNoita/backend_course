import mongoose from 'mongoose';
import Gradeschema from './Grade.js';

const Studentschema = new mongoose.Schema({
  studentcode: {
    type: String,
    unique: true,
    required: true,
    match: /^[a-z]{1}[0-9]{4}$/,
  },
  name: { type: String, required: true, max: 80 },
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  studypoints: { type: Number, min: 0, max: 300 },
  grades: { type: [Gradeschema], requiered: true },
});
const Student = mongoose.model('Student', Studentschema);

export default Student;
