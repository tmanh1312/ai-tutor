import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
// import React, { useState } from 'react';

dotenv.config();


export default async function QuizPage() {
    // const [newMessage, setNewMessage] = useState('');

    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const assistant = await openai.beta.assistants.retrieve("asst_BjzXz3HfQd68yg3AFFEUYjlm")

    // console.log(assistant);
 
    // Threads
    // Create Thread
    const thread = await openai.beta.threads.create();
    console.log(thread.id);

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
    const messages = await openai.beta.threads.messages.list(thread.id);
    // messages.body.data.forEach(message => {
    //     console.log(message.content[0]);
    // });

    // const sendMessage = async () => {
    //     const message = await openai.beta.threads.messages.create("thread_TVegVwnqVh7K8rDUvIPdVYQ9", {
    //         role: "user",
    //         content: {newMessage}
    //     });
    //     console.log(message);
    // };

    // setNewMessage = (message) => { };
    // newMessage = "Type a message...";

    const toPrint = messages.body.data.map((message) => {
        const current = message.content[0].text.value;
        if (current != "") {
            if (message.role === "assistant") {
                return (
                    <div className="rounded border-lg bg-gray-300 p-3">
                        <p>{current}</p>
                    </div>)
            } else {
                return (
                    <div className="rounded border-lg bg-black p-3">
                        <p className="text-white">{current}</p>
                    </div>)
            }
            // return <p>{current}</p>
        }
    }).reverse();
    // console.log(toPrint.reverse());

    // message.content[0].text.value).join('\n')

    return (
        <div>
            <div>{toPrint}</div>
            <div className="rounded-lg border-l-black bg-grey-400">
                <input
                    type="text"
                    className="rounded-lg h-12"
                    // value={newMessage}
                    // onChange={(e) => setNewMessage(e.target.value)}
                />
                {/* <button className="pl-5" onClick={sendMessage}>Send</button> */}
            </div>

        </div>
    );
}
{/* <input
type="text"
className="rounded-lg h-12"
value={newMessage}
onChange={(e) => setNewMessage(e.target.value)}
/>
<button className="pl-5" onClick={sendMessage}>Send</button> */}