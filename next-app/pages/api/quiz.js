import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const assistant = await openai.beta.assistants.retrieve("asst_BjzXz3HfQd68yg3AFFEUYjlm");

  const messages = await openai.beta.threads.messages.list("thread_TVegVwnqVh7K8rDUvIPdVYQ9");

  res.status(200).json({ assistant, messages });
}
