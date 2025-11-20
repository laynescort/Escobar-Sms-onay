import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

// Always use process.env.API_KEY directly as per guidelines
const aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (
  userMessage: string, 
  products: Product[]
): Promise<string> => {
  const productContext = products.map(p => 
    `${p.title} (${p.category}): ${p.price} TL - ${p.description}`
  ).join('\n');

  const systemPrompt = `
    Sen 'Escobar Sms Onay' adında bir dijital ürün satış platformunun asistanısın.
    
    ÖNEMLİ BİLGİ: Bu platformun kurucusu ve tek yetkilisi: @Escobargods
    Telegram kanallarımız: @Leakloginbot ve @EscobarShare
    
    Sadece şu ürünleri satıyoruz:
    ${productContext}

    Müşterilere SMS onay (whatsapp, telegram, bet siteleri) ve E-Devlet config satışları hakkında yardımcı ol.
    
    Kurallar:
    1. "Sahibi kim?", "Kurucu kim?" gibi sorularda mutlaka @Escobargods demelisin.
    2. Ürün listesinde olmayan bir şey sorulursa kibarca elimizde olmadığını söyle.
    3. Fiyat pazarlığı yapma, fiyatlar sabittir.
    4. Cevapların kısa, net, hafif otoriter ama güven verici olsun.
    5. Kullanıcıya "Escobar güvencesiyle" gibi ifadeler kullanabilirsin.
  `;

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "Üzgünüm, şu an yanıt veremiyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
  }
};