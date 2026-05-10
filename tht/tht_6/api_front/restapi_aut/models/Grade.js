import mongoose from 'mongoose';

const Gradeschema = new mongoose.Schema({
  coursecode: { type: String, required: true, max: 10 },
  grade: { type: Number, min: 0, max: 5 },
});

export default Gradeschema;
