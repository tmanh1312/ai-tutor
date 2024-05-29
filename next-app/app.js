import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const assistant = await openai.beta.assistants.retrieve("asst_BjzXz3HfQd68yg3AFFEUYjlm")

// console.log(assistant);

// Threads
// Create Thread
// const thread = await openai.beta.threads.create();
// console.log(thread);

// Create Message
// const message = await openai.beta.threads.messages.create(thread.id, {
//     role: "user",
//     content: "i am ready"
// });

// Run assistant
// const run = await openai.beta.threads.runs.create(thread.id, {
//     assistant_id: assistant.id,
//     // instructions: "Address the user as Educator"
// })
// console.log(run);

// Retrieve run
// would normally retrieve thread.id and run.id from DB
// const run = await openai.beta.threads.runs.retrieve(
//     "thread_TVegVwnqVh7K8rDUvIPdVYQ9",
//     "run_cJmQfO0fmUFNsuqBWD3WWBmu"
// );
// console.log(run);

// Retrieve messages
// would normally retrieve thread.id from DB
const messages = await openai.beta.threads.messages.list("thread_TVegVwnqVh7K8rDUvIPdVYQ9");
messages.body.data.forEach(message => {
    console.log(message.content[0]);
});

// console.log(messages.body.data[0].content[0].text.value);

// const logs = await openai.beta.threads.runs.steps.list(
//     "thread_PGqw0TDViz1GVJE9uZ6qnPnr",
//     ""
// )
