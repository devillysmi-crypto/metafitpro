'use client';

import { useState } from 'react';
import { Settings, Globe, CreditCard, Bell, Lock, ChevronRight, Check } from 'lucide-react';
import { languages, Language } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';

export default function SettingsPage() {
  const { language, setLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [hasSubscription] = useState(false);

  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{t('settings')}</h1>
          <p className="text-gray-400">Gerencie suas preferências e assinatura</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-4">
          {/* Idioma */}
          <div
            onClick={() => setShowLanguageModal(true)}
            className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-[#00FF88]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                  <Globe className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('language')}</h3>
                  <p className="text-sm text-gray-400">
                    {languages.find(l => l.code === language)?.name}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#00FF88] transition-colors" />
            </div>
          </div>

          {/* Assinatura */}
          <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                  <CreditCard className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('subscription')}</h3>
                  <p className="text-sm text-gray-400">
                    {hasSubscription ? t('subscriptionActive') : t('subscriptionInactive')}
                  </p>
                </div>
              </div>
            </div>
            
            {hasSubscription ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Plano</span>
                  <span className="text-white font-semibold">MetaPro Premium</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Valor</span>
                  <span className="text-white font-semibold">$4.99/mês</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Próxima cobrança</span>
                  <span className="text-white font-semibold">19 Dez 2024</span>
                </div>
                <button className="w-full mt-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                  {t('manageSubscription')}
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  Assine o MetaPro Premium e tenha acesso a todos os recursos
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#00FF88]" />
                    Scan ilimitado de alimentos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#00FF88]" />
                    Treinos personalizados com IA
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#00FF88]" />
                    Acompanhamento de evolução
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#00FF88]" />
                    Modo treino com voz
                  </li>
                </ul>
                <button className="w-full mt-4 bg-[#00FF88] hover:bg-[#00CC6A] text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00FF88]/20">
                  {t('subscribe')} • $4.99/mês
                </button>
              </div>
            )}
          </div>

          {/* Notificações */}
          <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-[#00FF88]/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                  <Bell className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('notifications')}</h3>
                  <p className="text-sm text-gray-400">Gerencie suas notificações</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#00FF88] transition-colors" />
            </div>
          </div>

          {/* Privacidade */}
          <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-[#00FF88]/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                  <Lock className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('privacy')}</h3>
                  <p className="text-sm text-gray-400">Termos e privacidade</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#00FF88] transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Language Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{t('language')}</h2>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLanguageModal(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-[#00FF88]/10 border border-[#00FF88]/50'
                      : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`font-medium ${
                      language === lang.code ? 'text-[#00FF88]' : 'text-white'
                    }`}>
                      {lang.name}
                    </span>
                  </div>
                  {language === lang.code && (
                    <Check className="w-5 h-5 text-[#00FF88]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
