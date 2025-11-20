import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-dark-900 py-12 sm:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">Escobar Sms Onay &</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
            Config Market
          </span>
        </h1>
        
        <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <span className="text-lg font-bold text-white">📢 Ücretsiz Log & Duyurular</span>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <a href="https://t.me/Leakloginbot" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#229ED9]/20 text-[#229ED9] border border-[#229ED9]/50 rounded-lg hover:bg-[#229ED9]/30 transition-colors flex items-center gap-2 font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                @Leakloginbot
              </a>
              <a href="https://t.me/EscobarShare" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#229ED9]/20 text-[#229ED9] border border-[#229ED9]/50 rounded-lg hover:bg-[#229ED9]/30 transition-colors flex items-center gap-2 font-semibold">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                @EscobarShare
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-400">
          Piyasanın en hızlı Whatsapp & Telegram onayları ve garantili E-Devlet configleri burada.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#products" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:text-lg transition-all hover:shadow-lg hover:shadow-red-500/25">
            Ürünleri Listele
          </a>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};