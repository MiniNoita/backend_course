import { GoogleGenerativeAI } from '@google/generative-ai';
import data from './data.json';
import dotenv from 'dotenv';

dotenv.config();

interface info {
  topic: string;
  info: string;
}

if (!process.env.GEMINI_API_KEY) {
  throw new Error('Missing API key');
}
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const context = (data as info[])
  .map((item) => `Topic: ${item.topic}, info: ${item.info}`)
  .join('\n');

export async function askAgent(question: string): Promise<string> {
  const model = ai.getGenerativeModel({ model: 'gemini-3.5-flash' });

  const prompt = `Here is a question and some my own data. Give back the data that has the same topic as the question. If there is no topic for the question say back that "google it yourself". Give a simple short sentence about the topic after.
  
  Data: ${context}
  
  Question: ${question}
  
  Give the answer in this format:
  
  Here's the topic: ...
  
  Here's the info: ...
  
  Here's sentence from AI: ...`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}
