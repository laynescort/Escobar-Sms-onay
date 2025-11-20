import React, { useState } from 'react';
import { OrderDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onSubmit: (details: OrderDetails) => Promise<void>;
  isProcessing: boolean;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  totalAmount,
  onSubmit,
  isProcessing
}) => {
  const [formData, setFormData] = useState<OrderDetails>({
    telegramUsername: '',
    paymentMethod: 'kripto',
    note: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-dark-900 w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-fadeIn">
        <div className="p-6 border-b border-white/10 bg-dark-800">
          <h3 className="text-xl font-bold text-white">Siparişi Onayla</h3>
          <p className="text-sm text-gray-400 mt-1">Ödeme sonrası teslimat Telegram üzerinden yapılacaktır.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Telegram Username Input */}
          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">Telegram Kullanıcı Adı</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                @
              </span>
              <input
                required
                type="text"
                className="w-full bg-dark-900 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="kullaniciadi"
                value={formData.telegramUsername}
                onChange={e => setFormData({...formData, telegramUsername: e.target.value})}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Size ulaşabilmemiz için gereklidir.</p>
          </div>

          {/* Payment Methods */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Ödeme Yöntemi</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({...formData, paymentMethod: 'kripto'})}
                className={`p-3 rounded-lg border text-center transition-all ${formData.paymentMethod === 'kripto' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-dark-900 border-white/10 text-gray-400 hover:bg-white/5'}`}
              >
                <span className="block font-bold">Kripto</span>
                <span className="text-xs opacity-70">USDT / BTC</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, paymentMethod: 'mswap'})}
                className={`p-3 rounded-lg border text-center transition-all ${formData.paymentMethod === 'mswap' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-dark-900 border-white/10 text-gray-400 hover:bg-white/5'}`}
              >
                <span className="block font-bold">Mswap</span>
                <span className="text-xs opacity-70">Hızlı Takas</span>
              </button>
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Sipariş Notu (Opsiyonel)</label>
            <textarea
              rows={2}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Varsa eklemek istedikleriniz..."
              value={formData.note}
              onChange={e => setFormData({...formData, note: e.target.value})}
            />
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 mt-2">
             <div className="flex items-center justify-between mb-4 text-sm">
               <span className="text-gray-400">Ödenecek Tutar:</span>
               <span className="text-xl font-bold text-white">{totalAmount.toFixed(2)} ₺</span>
             </div>
             
             <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-green-900/20"
             >
               {isProcessing ? (
                 <>
                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                   İşleniyor...
                 </>
               ) : (
                 <>
                   <span>Siparişi Tamamla</span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </>
               )}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};