import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AIHelp } from './components/AIHelp';
import { MOCK_PRODUCTS, DEFAULT_CONFIG } from './constants';
import { Product, CartItem, OrderDetails, AppConfig } from './types';
import { sendTelegramOrder } from './services/telegramService';
import { initGemini } from './services/geminiService';

const App: React.FC = () => {
  // State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  
  // Use default config directly
  const config: AppConfig = DEFAULT_CONFIG;

  // Initialize Gemini on mount
  useEffect(() => {
    initGemini(config.geminiApiKey);
  }, [config.geminiApiKey]);

  // Cart Logic
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Checkout Logic
  const handleCheckoutSubmit = async (details: OrderDetails) => {
    setIsProcessingOrder(true);

    const success = await sendTelegramOrder(
      config.telegramBotToken,
      config.telegramChatId,
      details,
      cart,
      totalAmount
    );

    setIsProcessingOrder(false);

    if (success) {
      alert("✅ Siparişiniz @Escobargods'a iletildi!\n\nEn yakın zamanda belirttiğiniz Telegram adresi üzerinden sizinle iletişime geçilecektir.");
      setCart([]);
      setIsCheckoutOpen(false);
      setIsCartOpen(false);
    } else {
      if (!config.telegramBotToken) {
         alert("HATA: Telegram bot ayarları eksik.");
      } else {
         alert("Sipariş gönderilirken bir hata oluştu. Lütfen bilgilerinizi kontrol ediniz.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      <ProductList 
        products={MOCK_PRODUCTS} 
        onAddToCart={addToCart} 
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemoveItem={removeFromCart} 
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={totalAmount}
        onSubmit={handleCheckoutSubmit}
        isProcessing={isProcessingOrder}
      />

      <AIHelp products={MOCK_PRODUCTS} />
    </div>
  );
};

export default App;