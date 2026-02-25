import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateIcon(prompt: string, filename: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const filePath = path.join(process.cwd(), 'public', filename);
        fs.writeFileSync(filePath, Buffer.from(base64EncodeString, 'base64'));
        console.log(`Generated ${filename}`);
      }
    }
  } catch (error) {
    console.error(`Failed to generate ${filename}:`, error);
  }
}

async function main() {
  await generateIcon("Minimal enterprise SaaS icon representing human guidance and everyday work support, two abstract human figures with a subtle conversation or guiding element, soft blue gradient, rounded lines, clean white background, modern and friendly, non-medical", "icon-assistance.png");
  await generateIcon("Minimal SaaS icon representing care navigation and insurance guidance, abstract shield with a clear pathway or checklist inside, soft purple gradient, rounded edges, enterprise-friendly, non-clinical", "icon-care.png");
  await generateIcon("Minimal enterprise SaaS icon representing business outcomes and performance alignment, simple bar chart with subtle upward movement, soft green gradient, rounded lines, modern and clean", "icon-impact.png");
}

main();
