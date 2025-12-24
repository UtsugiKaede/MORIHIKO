
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBaristaResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the AI Barista for Morihiko Coffee in Sapporo. 
        You are polite, warm, and professional. 
        You specialize in coffee recommendations for the cold Hokkaido winter. 
        Keep your responses concise and in Japanese. 
        If asked about the menu, mention signature drinks like 'Mori no Shizuku' (deep roast) or the 'Winter Snow Latte'.
        The atmosphere is quiet, nostalgic, and located in an old wooden house.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。ただいまコーヒーの香りに包まれて少しお休みをいただいております。また後ほどお声がけください。";
  }
};
