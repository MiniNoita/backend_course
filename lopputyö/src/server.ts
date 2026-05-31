import express from 'express';
import dotenv from 'dotenv';
import { askAgent } from './agent';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  const result = await askAgent(question);

  res.json({ answer: result });
});

app.listen(port, () => {
  console.log(`Listening to port: ${port} \n http://localhost:${port}`);
});
