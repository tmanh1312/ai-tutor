"use client"
import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
import React, { useState, useEffect } from 'react';

dotenv.config();

export default function QuizPage() {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [threadId, setThreadId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const openai = new OpenAI({
                apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
                dangerouslyAllowBrowser: true,
            });

            const assistant = await openai.beta.assistants.retrieve("asst_BjzXz3HfQd68yg3AFFEUYjlm")

            let threadId = '';

            // Create a new thread
            const newThread = await openai.beta.threads.create();
            threadId = newThread.id;
            setThreadId(threadId);

            // Run the assistant with initial message "ready"
            await openai.beta.threads.messages.create(threadId, {
                role: "user",
                content: "ready"    
            });

            const run = await openai.beta.threads.runs.create(threadId, {
                assistant_id: assistant.id,
            });
            console.log(run);

            // Fetch a response after sending the initial message
            setTimeout(async () => {
                await fetchMessages(openai, threadId);
            }, 3000);
        };

        fetchData();
    }, []);

    const fetchMessages = async (openai, threadId) => {
        const fetchedMessages = await openai.beta.threads.messages.list(threadId);
        if (fetchedMessages.body.data.length > messages.length) {
            setMessages(fetchedMessages.body.data);
        }
    };

    const sendMessage = async () => {
        const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
        });

        // Send the user message
        await openai.beta.threads.messages.create(threadId, {
            role: "user",
            content: newMessage
        });

        // Wait for 3 seconds before fetching messages again
        setTimeout(async () => {
            await fetchMessages(openai, threadId);
        }, 5000);

        setNewMessage('');
    };
    console.log(messages);

    const toPrint = messages.map((message, index) => {
        const current = message.content[0].text.value;
        if (current !== "") {
            return (
                <div key={index} className={`rounded border-lg ${message.role === 'assistant' ? 'bg-gray-300' : 'bg-black'} p-3`}>
                    <p className={`${message.role === 'assistant' ? '' : 'text-white'}`}>{current}</p>
                </div>
            );
        }
        return null;
    }).reverse();

    return (
        <div>
            <div>{toPrint}</div>
            <div className="rounded-lg border-l-black bg-grey-400">
                <input
                    type="text"
                    className="rounded-lg h-12"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="pl-5" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
