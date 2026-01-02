import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

// Initialize Gemini Client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrandStrategy = async (
  businessDescription: string,
  industry: string
): Promise<StrategyResponse> => {
  try {
    const modelId = "gemini-3-flash-preview";
    
    const prompt = `
      Act as a senior digital strategist for a top-tier creative agency.
      Analyze the following client request:
      Business/Project: ${businessDescription}
      Industry: ${industry}

      Provide a high-impact digital strategy summary.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: {
              type: Type.STRING,
              description: "A catchy, modern tagline for the brand (max 10 words)",
            },
            summary: {
              type: Type.STRING,
              description: "A 2-sentence executive summary of the digital approach.",
            },
            suggestedStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 4-5 recommended technologies (e.g., React, Node.js, AI tools).",
            },
            marketingAngles: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 distinct marketing angles or value propositions.",
            },
          },
          required: ["tagline", "summary", "suggestedStack", "marketingAngles"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response generated from AI.");
    }

    try {
      return JSON.parse(text) as StrategyResponse;
    } catch (parseError) {
      console.error("Failed to parse Gemini JSON response:", text);
      throw new Error("Failed to parse strategy response from AI.");
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};