import React, { useState, useEffect } from 'react';
import { AppConfig } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
  onSave: (config: AppConfig) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, config, onSave }) => {
  const [localConfig, setLocalConfig] = useState<AppConfig>(config);

  useEffect(() => {
    if (isOpen) setLocalConfig(config);
  }, [isOpen, config]);

  const handleSave = () => {
    onSave(localConfig);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
       <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
       <div className="relative bg-dark-900 w-full max-w-md rounded-2xl border border-white/10 shadow-2xl p-6">
         <h3 className="text-xl font-bold text-white mb-4">Geliştirici Ayarları</h3>
         <p className="text-xs text-gray-400 mb-6">
           Siparişleri kendi Telegram botunuza düşürmek için aşağıdaki bilgileri doldurun.
         </p>

         <div className="space-y-4">
           <div>
             <label className="block text-xs font-medium text-blue-400 mb-1 uppercase">Telegram Bot Token</label>
             <input
               type="text"
               value={localConfig.telegramBotToken}
               onChange={e => setLocalConfig({...localConfig, telegramBotToken: e.target.value})}
               className="w-full bg-dark-800 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-blue-500 outline-none"
               placeholder="123456:ABC-DEF..."
             />
           </div>

           <div>
             <label className="block text-xs font-medium text-blue-400 mb-1 uppercase">Telegram Chat ID</label>
             <input
               type="text"
               value={localConfig.telegramChatId}
               onChange={e => setLocalConfig({...localConfig, telegramChatId: e.target.value})}
               className="w-full bg-dark-800 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-blue-500 outline-none"
               placeholder="-100XXXXX or User ID"
             />
           </div>
         </div>

         <div className="mt-6 flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white">İptal</button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg">Kaydet</button>
         </div>
       </div>
    </div>
  );
};