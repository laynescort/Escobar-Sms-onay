export enum ProductCategory {
  SMS = 'SMS Onay',
  CONFIG = 'Config (.svb)',
  OTHER = 'Diğer'
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  stock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  telegramUsername: string; // Changed from fullName/email/phone
  paymentMethod: 'kripto' | 'mswap';
  note?: string;
}

export interface AppConfig {
  telegramBotToken: string;
  telegramChatId: string;
}