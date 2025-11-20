import { Product, ProductCategory } from "./types";

export const MOCK_PRODUCTS: Product[] = [
  // SMS Onay Kategorisi
  {
    id: 'sms-1',
    title: '+90 Whatsapp Onay',
    description: 'Türk numara Whatsapp SMS onayı. Garantili işlem.',
    price: 200.00,
    category: ProductCategory.SMS,
    // Clean Whatsapp Green
    image: 'https://placehold.co/600x400/25D366/FFFFFF/png?text=WHATSAPP%0A%2B90+TR&font=roboto',
    stock: true
  },
  {
    id: 'sms-2',
    title: 'Yabancı Whatsapp Onay',
    description: 'Global numaralar ile Whatsapp onayı.',
    price: 100.00,
    category: ProductCategory.SMS,
    // Clean Teal
    image: 'https://placehold.co/600x400/128C7E/FFFFFF/png?text=WHATSAPP%0AGLOBAL&font=roboto',
    stock: true
  },
  {
    id: 'sms-3',
    title: '+90 Telegram Onay',
    description: 'Türk numara Telegram SMS onayı.',
    price: 120.00,
    category: ProductCategory.SMS,
    // Clean Telegram Blue
    image: 'https://placehold.co/600x400/229ED9/FFFFFF/png?text=TELEGRAM%0A%2B90+TR&font=roboto',
    stock: true
  },
  {
    id: 'sms-4',
    title: 'Yabancı Telegram Onay',
    description: 'Global numaralar ile Telegram onayı.',
    price: 70.00,
    category: ProductCategory.SMS,
    // Clean Light Blue
    image: 'https://placehold.co/600x400/0088cc/FFFFFF/png?text=TELEGRAM%0AGLOBAL&font=roboto',
    stock: true
  },
  {
    id: 'sms-5',
    title: 'Bet / Bahis Sitesi SMS',
    description: 'Bahis ve kumar siteleri için özel SMS onayı.',
    price: 150.00,
    category: ProductCategory.SMS,
    // Clean Red
    image: 'https://placehold.co/600x400/991b1b/FFFFFF/png?text=BET+SMS%0ACASINO&font=roboto',
    stock: true
  },
  {
    id: 'sms-6',
    title: 'Diğer Platformlar',
    description: 'İstediğiniz herhangi bir site için SMS onay yapılır.',
    price: 50.00,
    category: ProductCategory.SMS,
    // Clean Gray
    image: 'https://placehold.co/600x400/475569/FFFFFF/png?text=DIGER%0ASITELER&font=roboto',
    stock: true
  },

  // Config Kategorisi - Reverted to Premium Style
  {
    id: 'cfg-1',
    title: 'E-Devlet Tapu + Araç Config',
    description: '.svb formatında. Tapu ve araç sorgulama özellikli.',
    price: 1200.00,
    category: ProductCategory.CONFIG,
    // Premium Red (Government style)
    image: 'https://placehold.co/600x400/ef4444/FFFFFF/png?text=E-DEVLET%0ATAPU+%2B+ARAC&font=roboto',
    stock: true
  },
  {
    id: 'cfg-2',
    title: 'E-Devlet Config Boş',
    description: '.svb formatında temel E-Devlet config.',
    price: 700.00,
    category: ProductCategory.CONFIG,
    // Premium Gray
    image: 'https://placehold.co/600x400/334155/FFFFFF/png?text=E-DEVLET%0ABOS+CONFIG&font=roboto',
    stock: true
  },
  {
    id: 'cfg-3',
    title: 'E-Devlet Sahibinden Tapu + Araç',
    description: 'Sahibinden.com entegreli tapu ve araç config .svb',
    price: 2000.00,
    category: ProductCategory.CONFIG,
    // Premium Yellow (Sahibinden style)
    image: 'https://placehold.co/600x400/eab308/000000/png?text=SAHIBINDEN%0AFULL+CAPTURE&font=roboto',
    stock: true
  },
  {
    id: 'cfg-4',
    title: 'E-Devlet Letgo Tapu + Araç',
    description: 'Letgo entegreli tapu ve araç config .svb',
    price: 1500.00,
    category: ProductCategory.CONFIG,
    // Premium Pink (Letgo style)
    image: 'https://placehold.co/600x400/ec4899/FFFFFF/png?text=LETGO%0ATAPU+%2B+ARAC&font=roboto',
    stock: true
  },
  {
    id: 'cfg-5',
    title: 'E-Devlet Arabam.com Tapu + Araç',
    description: 'Arabam.com entegreli tapu ve araç config .svb',
    price: 1500.00,
    category: ProductCategory.CONFIG,
    // Premium Orange (Arabam style)
    image: 'https://placehold.co/600x400/f97316/FFFFFF/png?text=ARABAM.COM%0AFULL+CONFIG&font=roboto',
    stock: true
  }
];

export const DEFAULT_CONFIG = {
  telegramBotToken: '8571162374:AAFOym_9t9PODJIQdAf0h70Wfub8sAyef7s',
  telegramChatId: '7513672617',
  geminiApiKey: process.env.API_KEY || ''
};