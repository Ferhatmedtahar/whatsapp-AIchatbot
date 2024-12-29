import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { context } from "./config.js";
const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash-exp",
  temperature: 0.7,
  verbose: true,
  maxOutputTokens: 1000,
});

export async function generateResponse(message) {
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", context],
    ["human", "{input}"],
  ]);
  const parser = new StringOutputParser();
  const chain = prompt.pipe(model).pipe(parser);
  return await chain.invoke({ input: message });
}
