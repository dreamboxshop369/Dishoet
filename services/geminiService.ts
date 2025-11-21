import { GoogleGenAI, Part } from "@google/genai";
import { ArtStyle, CharacterReference } from '../types';
import { urlToBase64, fileToBase64 } from '../utils';

// Initialize the Gemini client
// Note: process.env.API_KEY must be set in your build environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDispetDesign = async (
  userPrompt: string,
  style: ArtStyle,
  characterFiles: File[]
): Promise<string> => {
  try {
    const parts: Part[] = [];

    // 1. Add the Character Reference Images (Roko)
    // We iterate through the uploaded files and convert them to inline data
    for (const file of characterFiles) {
        const base64Data = await fileToBase64(file);
        parts.push({
            inlineData: {
                mimeType: file.type,
                data: base64Data,
            }
        });
    }

    // 2. Construct the main prompt
    // We combine the specific style prompt with the user's idea and the character context.
    const finalPrompt = `
      CONTEXT:
      The following images are reference images of "Roko", a donkey mascot.
      
      TASK:
      ${style.prompt}
      
      SUBJECT:
      Generate an image of Roko the donkey based on the reference images provided above, but strictly adhering to the style description.
      The specific action or scenario for Roko is: "${userPrompt}".
      
      REQUIREMENTS:
      - Ensure the character looks like Roko (donkey mascot) from the reference images.
      - Strictly follow the art style defined above.
      - White or transparent background is preferred if possible, but a solid color contrasting background is acceptable if the style dictates it.
      - Do not add text unless explicitly asked.
    `;

    parts.push({ text: finalPrompt });

    // 3. Call Gemini 2.5 Flash Image (Nano Banana)
    // Note: Using 'gemini-2.5-flash-image' as requested.
    // This model supports multimodal input (images + text) to generate images.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: parts },
      config: {
        // imageConfig parameters can be adjusted here if needed
        imageConfig: {
            aspectRatio: "1:1",
        }
      }
    });

    // 4. Extract the generated image
    // The response parts will contain the generated image
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          // Assuming PNG based on typical output, but could be JPEG
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    
    throw new Error("No image generated in the response.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};