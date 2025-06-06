import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

const openai_client = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai_client;
