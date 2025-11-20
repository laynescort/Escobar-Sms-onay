import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

let aiClient: GoogleGenAI | null = null;

export const initGemini = (apiKey: string) => {
  if (apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  }
};

export const getAIResponse = async (
  userMessage: string, 
  products: Product[]
): Promise<string> => {
  if (!aiClient) {
    return "Lütfen geçerli bir API Anahtarı ile sistemin yüklendiğinden emin olun.";
  }

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