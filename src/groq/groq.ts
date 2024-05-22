"use strict";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

const getGroqChatCompletion = async (content: string) => {
    const result = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: content
            }
        ],
        model: "llama3-8b-8192"
    });
  return result.choices[0].message.content
}

export default getGroqChatCompletion

