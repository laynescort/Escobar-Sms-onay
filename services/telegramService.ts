import { CartItem, OrderDetails } from "../types";

export const sendTelegramOrder = async (
  botToken: string,
  chatId: string,
  details: OrderDetails,
  cart: CartItem[],
  total: number
): Promise<boolean> => {
  if (!botToken || !chatId) {
    console.warn("Telegram credentials missing.");
    return false;
  }

  const itemsList = cart.map(item => 
    `- ${item.title} (x${item.quantity}) - ${(item.price * item.quantity).toFixed(2)} ₺`
  ).join('\n');

  const paymentMethodText = details.paymentMethod === 'kripto' ? '🪙 Kripto (USDT)' : '🔄 Mswap';

  const message = `
⚠️ *YENİ SİPARİŞ (Escobar Market)*

👤 *Kullanıcı Bilgileri:*
Telegram: @${details.telegramUsername.replace('@', '')}
Ödeme Yöntemi: ${paymentMethodText}

🛒 *Sepet:*
${itemsList}

💰 *Toplam Tutar:* ${total.toFixed(2)} ₺

📝 *Not:* ${details.note || 'Yok'}

⏰ *Tarih:* ${new Date().toLocaleString('tr-TR')}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error("Telegram send error:", error);
    return false;
  }
};